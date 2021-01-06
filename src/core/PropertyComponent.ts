import { createValueInstanceFromDefinition, getValueConstructor } from '../values/classes';
import { PropertyComponent as IPropertyComponent, TypeDefinition } from '../types';

import { bytesWithSize } from '../utils';

import { Configuration } from './Configuration';
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
  }

  public decode(bytes: number[]) {
    this.createValue().decode(bytes);
    return this;
  }

  public encode() {
    if (this._value === undefined) {
      throw new Error(
        `Failed to encode ${this.name} component for property ${this.property.name}. It has no value.`,
      );
    }

    return [this.definition.id, ...bytesWithSize(this._value.encode())];
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

  public set value(value: Value | undefined) {
    if (value) {
      const ValueConstructor = this.getValueConstructor();
      if (!(value instanceof ValueConstructor)) {
        throw new Error(
          `Cannot assign value to property ${this.property.name} ${this.name} component. It must be type of ${ValueConstructor.name}.`,
        );
      }
    }

    this._value = value;
  }

  public createValue(initialValue?: unknown) {
    this.value = createValueInstanceFromDefinition(
      this.getTypeDefinitionForValueConstructor(),
      Configuration.getCustomTypeDefinition,
      Configuration.getMeasurementTypeDefinition,
    );

    return initialValue ? this.value.setValue(initialValue) : this.value;
  }

  public setValue(value?: Value) {
    this.value = value;
    return this;
  }

  public toJSON() {
    return this.value ? this.value.valueOf() : null;
  }

  protected getTypeDefinitionForValueConstructor(): Readonly<TypeDefinition> {
    return this.definition;
  }

  protected getValueConstructor() {
    return getValueConstructor(this.getTypeDefinitionForValueConstructor());
  }
}
