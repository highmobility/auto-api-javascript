import { ConstructorType } from '../types';
import { DescriptorSymbol, getClassDescriptor, PropertiesSymbol } from '../decorators';
import { ValueConstructor } from '../values/base';

import { Property, PropertyDataComponentSetter } from './Property';

export interface CapabilityDescriptor<P extends Properties = Properties> {
  identifier: [number, number];
  name: string;
  properties: P;
  state?: ValueConstructor[];
}

export type Properties<T extends string = string> = Record<T, ConstructorType<Property>>;

export type PropertiesMap<P extends Properties, K extends keyof P = keyof P> = {
  [name in K]?: InstanceType<P[name]> | InstanceType<P[name]>[];
};

export abstract class Capability<P extends Properties> {
  [DescriptorSymbol]: CapabilityDescriptor<P>;
  [PropertiesSymbol]: PropertiesMap<P> = {};

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public get properties() {
    return this[PropertiesSymbol];
  }

  public addProperty<T extends keyof P>(
    name: T,
    value?: PropertyDataComponentSetter<InstanceType<P[T]>>,
  ): InstanceType<P[T]> {
    const Constructor = this.descriptor.properties[name];
    const property = new Constructor(value) as InstanceType<P[T]>;

    this.properties[name] = getClassDescriptor(Constructor).multiple
      ? [...((this.properties[name] as InstanceType<P[T]>[]) || []), property]
      : property;

    return property;
  }

  public getProperty<T extends keyof P>(name: T) {
    return this.properties[name];
  }

  public toJSON() {
    return this.properties;
  }
}
