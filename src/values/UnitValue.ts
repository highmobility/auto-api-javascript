import { MeasurementType, UnitType } from '../types';

import { FormatError } from '../core/Error';
import { NamedEntity } from '../core/NamedEntity';
import { Value } from '../core/Value';

import { isNumber, isObject } from '../utils';

import { DoubleValue } from './DoubleValue';

type UnitValueData = {
  value: DoubleValue;
  unit: UnitType;
};

type UnitValueDataSetter = {
  value: number;
  unit?: string | number;
};

export class UnitValue extends Value<UnitValueData, UnitValueDataSetter> implements NamedEntity {
  public static readonly ValueSize = 8;

  public constructor(public readonly definition: Readonly<MeasurementType>) {
    super();

    if (!definition) {
      throw new Error(`Cannot construct UnitValue without definition.`);
    }
  }

  public encode() {
    const { id } = this.definition;
    const { unit, value } = this.getValueForEncoding();

    return [id, unit.id, ...value.encode()];
  }

  public decode(bytes: number[]) {
    const [, unitId, ...valueBytes] = bytes;

    const unit = this.getUnitDefinition('id', unitId);
    const value = new DoubleValue(UnitValue.ValueSize).decode(valueBytes);

    this._value = {
      unit,
      value,
    };

    return this;
  }

  public fromJSON(payload: unknown) {
    try {
      if (isObject(payload) && isNumber(payload.value)) {
        this.setValue(payload as UnitValueDataSetter);
      } else {
        throw new Error('Value must be a number.');
      }
    } catch (e) {
      throw new FormatError(e);
    }

    return this;
  }

  public get name() {
    return this.definition.name;
  }

  public getFirstUnitDefinition() {
    return this.definition.unit_types[0];
  }

  public getUnitDefinition<T extends keyof UnitType>(field: T, value: UnitType[T]) {
    const {
      definition: { unit_types: units },
      name,
    } = this;

    const unit = units.find((type) => type[field] === value);

    if (!unit) {
      throw new Error(
        `Measurement type ${name} does not define unit identified by (${field}: ${value}).`,
      );
    }

    return unit;
  }

  public setValue(data: UnitValueDataSetter) {
    const { unit: unitIdentifier, value: valueInUnits } = data;

    const currentUnit = this._value && this._value.unit;
    const currentValue = this._value && this._value.value;

    const unit =
      unitIdentifier !== undefined
        ? typeof unitIdentifier === 'string'
          ? this.getUnitDefinition('name', unitIdentifier)
          : this.getUnitDefinition('id', unitIdentifier)
        : currentUnit || this.getFirstUnitDefinition();
    const value = (currentValue || new DoubleValue(UnitValue.ValueSize)).setValue(valueInUnits);

    this._value = {
      unit,
      value,
    };

    return this;
  }

  public valueOf() {
    if (this._value) {
      const { unit, value } = this._value;
      return {
        unit: unit.name,
        value: value.valueOf(),
      };
    }

    return null;
  }
}
