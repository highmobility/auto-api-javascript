import { ConstructorType } from './types';

export const DescriptorSymbol = Symbol();
export const PropertiesSymbol = Symbol();

export type DescriptorType<C> = C extends ConstructorType<infer I>
  ? I extends {
      [DescriptorSymbol]: infer D;
    }
    ? D
    : never
  : never;

export function getClassDescriptor<C extends ConstructorType<any>>(target: C) {
  return target.prototype[DescriptorSymbol] as DescriptorType<C>;
}

export type ClassDescriptor = {
  [key: string]: any;
};

export function setClassDescriptor<
  T extends ClassDescriptor = ClassDescriptor,
  C extends ConstructorType<any> = ConstructorType<any>,
>(target: C, value: T) {
  target.prototype[DescriptorSymbol] = {
    ...(target.prototype[DescriptorSymbol] || {}),
    ...value,
  };
}

export function Descriptor<T extends ClassDescriptor>(value: T) {
  return (target: ConstructorType<any>) => setClassDescriptor(target, value);
}

export function Size(size: number) {
  return Descriptor({ size });
}
