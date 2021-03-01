import { PropertyComponent as IPropertyComponent, TypeDefinition } from '../types';
import { ValueFactory } from '../factories';

import { bytesWithSize } from '../utils';

import { InvalidCommandError } from './Error';
import { NamedEntity } from './NamedEntity';
import { Property } from './Property';
import { Serializable } from './Serializable';
import { Value } from './Value';

export abstract class PropertyComponent extends Serializable implements NamedEntity {
  private _value?: Value;

  public constructor(
    public readonly definition: Readonly<IPropertyComponent>,
    public readonly property: Readonly<Property>,
  ) {
    super();

    this.property.setComponent(this);
  }

  public decode(bytes: number[]) {
    try {
      this.createValue().decode(bytes);
      return this;
    } catch (e) {
      throw new InvalidCommandError(e);
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

  public fromJSON(payload: unknown) {
    (this.value || this.createValue()).fromJSON(payload);
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

  public createValue(initialValue?: unknown) {
    this._value = ValueFactory.createFromDefinition(this.getTypeDefinitionForValueConstructor());

    return initialValue !== undefined ? this._value.setValue(initialValue) : this._value;
  }

  public toJSON() {
    return this.value ? this.value.valueOf() : null;
  }

  protected getTypeDefinitionForValueConstructor(): Readonly<TypeDefinition> {
    return this.definition;
  }
}
