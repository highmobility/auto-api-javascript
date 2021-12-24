import { Descriptor, DescriptorSymbol } from '../../decorators';

import { Value, ValueConstructor, ValueDescriptor, ValueSetterArguments } from './Value';

export type CustomTypeItems = Record<string, ValueConstructor>;

export type CustomTypeItemsSetter<T extends CustomTypeItems> = {
  [key in keyof T]: ValueSetterArguments<InstanceType<T[key]>>;
};

export interface CustomTypeDescriptor<V extends CustomTypeItems> extends ValueDescriptor {
  items: V;
  order: V[keyof V];
}

export class CustomType<
  V extends CustomTypeItems,
  S extends CustomTypeItemsSetter<V> = CustomTypeItemsSetter<V>,
> extends Value<V, S> {
  [DescriptorSymbol]: CustomTypeDescriptor<V>;

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public setValue(value: S) {
    this.value = this.valueSetterToValueMap(this[DescriptorSymbol].items, value);
    return this;
  }

  protected valueSetterToValueMap<I extends CustomTypeItems>(
    items: I,
    value: CustomTypeItemsSetter<I>,
  ): I {
    if (value) {
      return Object.entries(value).reduce(
        (values, [k, v]) => ({
          ...values,
          [k as keyof I]: v instanceof Value ? v : new items[k](v),
        }),
        {} as I,
      );
    }

    return value;
  }
}

export function Items<T extends CustomTypeDescriptor<any>>(value: T) {
  return Descriptor<T>(value);
}
