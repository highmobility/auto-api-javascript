import { MeasurementType, UnitType } from '../types';

import { NamedEntity } from '../core/NamedEntity';
import { Value } from '../core/Value';

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

    if (definition === undefined) {
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

  public get name() {
    return this.definition.name;
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

    // TODO Triggering conversion here might be necessary
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

  protected getFirstUnitDefinition() {
    return this.definition.unit_types[0];
  }

  protected getUnitDefinition<T extends keyof UnitType>(field: T, value: UnitType[T]) {
    const definition = this.definition.unit_types.find((type) => type[field] === value);

    if (definition === undefined) {
      throw new Error(
        `Measurement type ${this.name} does not define unit identified by (${field}: ${value}).`,
      );
    }

    return definition;
  }
}
