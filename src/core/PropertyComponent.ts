import { PropertyComponent as IPropertyComponent, Property, TypeDefinition } from '../types';
import { ValueFactory } from '../factories/ValueFactory';

import { bytesWithSize } from '../utils';

import { InvalidCommandError } from './Error';
import { NamedEntity } from './NamedEntity';
import { Serializable } from './Serializable';
import { Value } from './Value';

export abstract class PropertyComponent extends Serializable implements NamedEntity {
  private _value?: Value;

  public constructor(
    public readonly definition: Readonly<IPropertyComponent>,
    public readonly property: Readonly<Property>,
  ) {
    super();
  }

  public decode(bytes: number[]) {
    try {
      this.createValueInstance().decode(bytes);
      return this;
    } catch (e) {
      throw new InvalidCommandError(e as Error);
    }
  }

  public encode() {
    if (this._value === undefined) {
      throw new Error(
        `Failed to encode ${this.name} component for property ${this.property.name}. It has no value.`,
      );
    }

    return [this.id, ...bytesWithSize(this._value.encode())];
  }

  public equals(component: PropertyComponent) {
    if (component.name === this.name) {
      if (this.value && component.value) {
        return this.value.equals(component.value);
      }

      return this.value === component.value;
    }

    return false;
  }

  public fromJSON(payload: unknown) {
    (this.value || this.createValueInstance()).fromJSON(payload);
    return this;
  }

  public get id() {
    return this.definition.id;
  }

  public get name() {
    return this.definition.name;
  }

  public get value() {
    return this._value;
  }

  public createValueInstance(initialValue?: unknown) {
    this._value = ValueFactory.createFromDefinition(this.getValueTypeDefinition());

    if (initialValue !== undefined) {
      this._value.setValue(initialValue);
    }

    return this._value;
  }

  public toJSON() {
    return this.valueOf();
  }

  public valueOf() {
    return this.value ? this.value.valueOf() : null;
  }

  protected getValueTypeDefinition(): Readonly<TypeDefinition> {
    return this.definition;
  }
}
