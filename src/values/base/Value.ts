import { ConstructorType } from '../../types';
import { DescriptorSymbol } from '../../decorators';

export interface ValueDescriptor {
  size?: number;
}

export type ValueConstructor<T extends Value = Value> = ConstructorType<T>;

export type ValueSetterArguments<V> = V extends Value<any, infer S> ? S : never;

export class Value<V = any, S = V> {
  [DescriptorSymbol]: ValueDescriptor;

  public value!: V;

  public constructor(value: S) {
    this.setValue(value);
  }

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: S) {
    this.value = value as unknown as V;
    return this;
  }

  public toJSON() {
    return this.valueOf();
  }
}
