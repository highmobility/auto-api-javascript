import { DescriptorSymbol } from '../decorators';
import { Timestamp, Value, ValueConstructor, ValueSetterArguments } from '../values/base';

import { PropertyComponents } from '../components';

export type PropertyComponentContainer<
  V extends ValueConstructor,
  C extends typeof PropertyComponents = typeof PropertyComponents,
> = {
  [K in keyof C]?: K extends 'data'
    ? InstanceType<V>
    : C[K] extends { value: ValueConstructor }
    ? InstanceType<C[K]['value']>
    : any;
};

export type PropertyDataComponentSetter<T> = T extends Property<infer D>
  ? ValueSetterArguments<InstanceType<D>>
  : never;

export interface PropertyDescriptor<V extends ValueConstructor> {
  id: number;
  multiple?: boolean;
  name: string;
  value: V;
}

export class Property<V extends ValueConstructor = ValueConstructor>
  implements PropertyComponentContainer<V>
{
  [DescriptorSymbol]: PropertyDescriptor<V>;

  // TODO
  public availability: Value | undefined;
  public data: InstanceType<V> | undefined;
  // TODO
  public failure: Value | undefined;
  public timestamp: Timestamp | undefined;

  public constructor(value?: ValueSetterArguments<InstanceType<V>>) {
    if (value) {
      this.setValue(value);
    }
  }

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public setValue(value: ValueSetterArguments<InstanceType<V>>) {
    this.data = (this.data || new this.descriptor.value()).setValue(value) as InstanceType<V>;
    return this;
  }
}
