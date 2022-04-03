import { DescriptorSymbol } from '../../decorators';

import { Double } from './Double';
import { Value, ValueDescriptor, ValueSetterArguments } from './Value';

export interface UnitTypeDescriptor<U extends string = string> extends ValueDescriptor {
  units: Record<U, number>;
}

export interface UnitTypeValue<U extends string = string> {
  unit: U;
  value: Double;
}

export interface UnitTypeValueSetter<U extends string> {
  unit: U;
  value: UnitTypeValue<U>['value'] | ValueSetterArguments<UnitTypeValue<U>['value']>;
}

export class UnitType<U extends string> extends Value<
  UnitTypeValue<U>,
  UnitTypeValue<U> | UnitTypeValueSetter<U>
> {
  [DescriptorSymbol]: UnitTypeDescriptor<U>;

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public setValue(value: UnitTypeValue<U> | UnitTypeValueSetter<U>) {
    this.$value = this.isUnitTypeValue(value) ? value : this.valueSetterToUnitTypeValue(value);
    return this;
  }

  public valueOf() {
    const { unit, value } = this.value;

    return {
      unit,
      value: value.valueOf(),
    };
  }

  protected isUnitTypeValue(
    value: UnitTypeValue<U> | UnitTypeValueSetter<U>,
  ): value is UnitTypeValue<U> {
    if (value.unit === undefined) {
      return false;
    }

    return this.descriptor.units[value.unit] && value.value instanceof Double;
  }

  protected valueSetterToUnitTypeValue({ unit, value }: UnitTypeValueSetter<U>) {
    return {
      unit,
      value: value instanceof Double ? value : new Double(value),
    };
  }
}
