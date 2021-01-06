import { EnumValue as IEnumValue, TypeDefinition } from '../types';

import { NamedEntity } from '../core/NamedEntity';
import { Value } from '../core/Value';

export class EnumValue extends Value<IEnumValue, string | number> implements NamedEntity {
  public constructor(
    public readonly definition: Readonly<TypeDefinition>,
    value?: string | number,
  ) {
    super();

    if (definition === undefined) {
      throw new Error(`Cannot construct EnumValue without definition.`);
    }

    if (definition.enum_values === undefined) {
      throw new Error(`Invalid type definition: field 'enum_values' is missing.`);
    }

    if (value) this.setValue(value);
  }

  public get name() {
    return this.definition.name;
  }

  public decode([id]: number[]) {
    this.setValue(id);
    return this;
  }

  public encode() {
    return [this.getValueForEncoding().id];
  }

  public getValueDefinitionByField<T extends keyof IEnumValue>(field: T, value: IEnumValue[T]) {
    const item = this.definition.enum_values!.find((item) => item[field] === value);

    if (item === undefined)
      throw new Error(`Enum of ${this.name} has no match for ${field}: ${value}.`);

    return item;
  }

  public setValue(value: string | number) {
    const definition =
      typeof value === 'string'
        ? this.getValueDefinitionByField('name', value)
        : this.getValueDefinitionByField('id', value);

    this._value = { ...definition };

    return this;
  }

  public valueOf() {
    return this._value ? this._value.name : null;
  }
}
