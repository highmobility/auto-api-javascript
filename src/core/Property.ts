import { Availability, Failure } from '../values/custom';
import { DescriptorSymbol } from '../decorators';
import { PropertyComponents } from '../components';
import { Timestamp, ValueConstructor, ValueSetterArguments } from '../values/base';

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

  public availability: Availability | undefined;
  public data: InstanceType<V> | undefined;
  public failure: Failure | undefined;
  public timestamp: Timestamp | undefined;

  public constructor(value?: ValueSetterArguments<InstanceType<V>>) {
    if (value) {
      this.data = value;
    }
  }

  public get descriptor() {
    return this[DescriptorSymbol];
  }
}
