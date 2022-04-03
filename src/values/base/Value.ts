import { ConstructorType } from '../../types';
import { DescriptorSymbol } from '../../decorators';

export interface ValueDescriptor {
  size?: number;
}

export type ValueConstructor<T extends Value = Value> = ConstructorType<T>;

export type ValueSetterArguments<V> = V extends Value
  ? V extends { setValue: (v: infer S) => any }
    ? S
    : never
  : never;

export class Value<V = any, S = V> {
  [DescriptorSymbol]: ValueDescriptor;

  protected $value!: V;

  public constructor(value: S | V) {
    this.setValue(value);
  }

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public get value(): V {
    return this.getValue();
  }

  public set value(value: S | V) {
    this.setValue(value);
  }

  public getValue() {
    return this.$value;
  }

  public setValue(value: S | V) {
    this.$value = value as unknown as V;
    return this;
  }

  public toJSON() {
    return this.valueOf();
  }
}
