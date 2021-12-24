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
  unit?: U;
  value: UnitTypeValue['value'] | ValueSetterArguments<UnitTypeValue['value']>;
}

export class UnitType<U extends string> extends Value<UnitTypeValue<U>, UnitTypeValueSetter<U>> {
  [DescriptorSymbol]: UnitTypeDescriptor<U>;

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public setValue(value: UnitTypeValueSetter<U>) {
    // TODO
    this.value = value as UnitTypeValue<U>;
    return this;
  }
}
