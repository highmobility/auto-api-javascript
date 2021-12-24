import { DescriptorSymbol } from '../../decorators';

import { Value, ValueDescriptor } from './Value';

export interface EnumDescriptor<I extends string = string> extends ValueDescriptor {
  values: Record<I, number>;
}

export class Enum<I extends string = string> extends Value<I> {
  [DescriptorSymbol]: EnumDescriptor<I>;

  public get descriptor() {
    return this[DescriptorSymbol];
  }
}
