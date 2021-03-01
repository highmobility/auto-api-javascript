import { ComponentName } from '../components/classes';
import { Property as IProperty } from '../types';
import { PropertyComponentFactory } from '../factories';

import { bytesToChunks, bytesWithSize, isEmptyObject } from '../utils';

import { InvalidCommandError, JSONError } from './Error';
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
      throw new InvalidCommandError(e);
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

  public fromJSON(payload: Record<string, unknown>) {
    try {
      for (const [componentName, componentAsJSON] of Object.entries(payload)) {
        this.createComponent(componentName as ComponentName).fromJSON(componentAsJSON);
      }
    } catch (e) {
      throw new JSONError(e);
    }

    return this;
  }

  public get id() {
    return this.definition.id;
  }

  public get multiple() {
    return !!this.definition.multiple;
  }

  public get name() {
    return this.definition.name;
  }

  public createComponent<T extends ComponentName>(identifier: T | number, initialValue?: unknown) {
    return PropertyComponentFactory.create(identifier, this, initialValue);
  }

  public getComponent<T extends ComponentName>(name: T) {
    if (this.hasComponent(name)) return this.components[name] as PropertyComponent;

    throw new Error(`Property ${this.name} has no ${name} component.`);
  }

  public hasComponent<T extends ComponentName>(name: T) {
    return !!this.components[name];
  }

  public setComponent(component?: PropertyComponent) {
    if (component instanceof PropertyComponent) {
      this.components[component.name as ComponentName] = component;
      return this;
    }

    throw new Error(
      `Property ${this.name} component must be instance of ${PropertyComponent.name}.`,
    );
  }

  public toJSON() {
    return isEmptyObject(this.components) ? null : this.components;
  }
}
