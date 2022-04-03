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
> extends Value<CustomTypeItemsInstance<I>, CustomTypeItemsInstance<I> | S> {
  [DescriptorSymbol]: CustomTypeDescriptor<I>;

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public get value(): CustomTypeItemsInstance<I> {
    return this.getValue();
  }

  public set value(value: CustomTypeItemsInstance<I> | S) {
    this.setValue(value);
  }

  public setValue(value: S | CustomTypeItemsInstance<I>) {
    this.$value = this.isItemsInstance(value) ? value : this.valueSetterToValueMap(value);
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

  protected isItemsInstance(
    value: CustomTypeItemsInstance<I> | S,
  ): value is CustomTypeItemsInstance<I> {
    return Object.entries(this.descriptor.items).every(([k, v]) => {
      k in value && value[k] instanceof v;
    });
  }

  protected valueSetterToValueMap(value: CustomTypeItemsSetter<I>): CustomTypeItemsInstance<I> {
    if (value) {
      return Object.entries(value).reduce(
        (values, [k, v]) => ({
          ...values,
          [k as keyof I]: v instanceof Value ? v : new this.descriptor.items[k](v),
        }),
        {},
      ) as CustomTypeItemsInstance<I>;
    }

    return value;
  }
}
