import { DescriptorSymbol } from '../../decorators';

import { Value, ValueConstructor, ValueDescriptor, ValueSetterArguments } from './Value';

export type CustomTypeItems = Record<string, ValueConstructor>;

export type CustomTypeItemsInstance<T extends CustomTypeItems> = {
  [key in keyof T]: InstanceType<T[key]>;
};

export type CustomTypeItemsSetter<T extends CustomTypeItems> = {
  [key in keyof T]: ValueSetterArguments<InstanceType<T[key]>>;
};

export interface CustomTypeDescriptor<V extends CustomTypeItems> extends ValueDescriptor {
  items: V;
  order: V[keyof V];
}

export class CustomType<
  I extends CustomTypeItems,
  S extends CustomTypeItemsSetter<I> = CustomTypeItemsSetter<I>,
> extends Value<CustomTypeItemsInstance<I>, S> {
  [DescriptorSymbol]: CustomTypeDescriptor<I>;

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public setValue(value: S) {
    this.value = this.valueSetterToValueMap(this[DescriptorSymbol].items, value);
    return this;
  }

  public valueOf() {
    return Object.entries(this.value).reduce(
      (items, [key, value]) => ({
        ...items,
        [key]: value.valueOf(),
      }),
      {},
    );
  }

  protected valueSetterToValueMap(
    items: I,
    value: CustomTypeItemsSetter<I>,
  ): CustomTypeItemsInstance<I> {
    if (value) {
      return Object.entries(value).reduce(
        (values, [k, v]) => ({
          ...values,
          [k as keyof I]: v instanceof Value ? v : new items[k](v),
        }),
        {},
      ) as CustomTypeItemsInstance<I>;
    }

    return value;
  }
}
