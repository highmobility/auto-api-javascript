import { ComponentMap } from '../components/classes';
import { ComponentName } from '../components/types';
import { Property as IProperty } from '../types';
import { PropertyComponentFactory } from '../factories/PropertyComponentFactory';

import { bytesToChunks, bytesWithSize, comparePropertyIdentity, isEmptyObject } from '../utils';

import { FormatError, InvalidCommandError } from './Error';
import { NamedEntity } from './NamedEntity';
import { Serializable } from './Serializable';
import { PropertyComponent } from './PropertyComponent';

export class Property extends Serializable implements NamedEntity {
  public constructor(
    public readonly definition: Readonly<IProperty>,
    public components: Partial<Record<ComponentName, PropertyComponent>> = {},
  ) {
    super();
  }

  public decode(bytes: number[] = []) {
    try {
      for (const [id, chunk] of bytesToChunks(bytes)) {
        this.createComponent(id).decode(chunk);
      }
    } catch (e) {
      throw new InvalidCommandError(e as Error);
    }

    return this;
  }

  public encode() {
    const bytes = Object.values(this.components).reduce<number[]>(
      (allComponentBytes, component) => [
        ...allComponentBytes,
        ...(component ? component.encode() : []),
      ],
      [],
    );

    return [this.id, ...bytesWithSize(bytes)];
  }

  public equals(property: Property) {
    return Object.values(ComponentMap).every((component) => {
      if (this.hasComponent(component) && property.hasComponent(component)) {
        return this.getComponent(component).equals(property.getComponent(component));
      }

      return this.components[component] === property.components[component];
    });
  }

  public fromJSON(payload: Record<string, unknown>) {
    try {
      for (const [componentName, componentAsJSON] of Object.entries(payload)) {
        this.createComponent(componentName as ComponentName).fromJSON(componentAsJSON);
      }
    } catch (e) {
      throw new FormatError(e as Error);
    }

    return this;
  }

  public clone(components?: ComponentName[]) {
    const instance = new (Object.getPrototypeOf(this).constructor)(this.definition) as Property;

    for (const component of components || (Object.keys(this.components) as ComponentName[])) {
      if (this.hasComponent(component)) {
        instance.setComponent(this.getComponent(component));
      }
    }

    return instance;
  }

  public get id() {
    return this.definition.id;
  }

  public get identityKey() {
    return this.definition.identity_key;
  }

  public get multiple() {
    return !!this.definition.multiple;
  }

  public get name() {
    return this.definition.name;
  }

  public createComponent<T extends ComponentName>(identifier: T | number, initialValue?: unknown) {
    const component = PropertyComponentFactory.create(identifier, this.definition, initialValue);

    return (this.components[component.name as ComponentName] = component);
  }

  public getComponent<T extends ComponentName>(name: T) {
    if (this.hasComponent(name)) {
      return this.components[name] as PropertyComponent;
    }

    throw new Error(`Property ${this.name} has no ${name} component.`);
  }

  public hasComponent<T extends ComponentName>(name: T) {
    return !!this.components[name];
  }

  public removeComponent<T extends ComponentName>(name: T) {
    if (this.hasComponent(name)) {
      delete this.components[name];
    }

    return this;
  }

  public setComponent<T extends ComponentName>(ref: PropertyComponent) {
    const component = this.createComponent(ref.name as T);

    if (ref.value) {
      component.fromJSON(ref.toJSON());
    }

    return component;
  }

  public isInstanceOf(property: Property) {
    const { identityKey, multiple } = property;
    if (property instanceof Object.getPrototypeOf(this).constructor) {
      if (multiple && identityKey) {
        if ([this, property].every((p) => p.hasComponent('data'))) {
          const [a, b] = [this, property].map((p) => p.valueOf() || {});
          return comparePropertyIdentity(a, b, identityKey);
        }

        return false;
      }

      return true;
    }

    return false;
  }

  public replace(property: Property) {
    return Object.values(ComponentMap).reduce((result, component) => {
      if (property.hasComponent(component)) {
        this.setComponent(property.getComponent(component));
      } else {
        this.removeComponent(component);
      }

      return result;
    }, this);
  }

  public toJSON() {
    return this.valueOf();
  }

  public valueOf() {
    return isEmptyObject(this.components)
      ? null
      : Object.entries(this.components).reduce(
          (value, [componentName, component]) => ({
            ...value,
            [componentName]: component?.valueOf(),
          }),
          {},
        );
  }
}
