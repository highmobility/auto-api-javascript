import { Configuration } from '../core/Configuration';
import { JSONError } from '../core/Error';
import { NamedEntity } from '../core/NamedEntity';
import { Value } from '../core/Value';

import { TypeDefinition, TypeDefinitionType } from '../types';
import { ValueFactory } from '../factories/ValueFactory';

import { bytesToChunk, bytesWithSize, isObject } from '../utils';

type CustomValueItems = Record<string, Value>;
type CustomValueData = Value | CustomValueItems;
type CustomValueSetter = unknown;

export class CustomValue extends Value<CustomValueData, CustomValueSetter> implements NamedEntity {
  public static readonly VariableSizeSubtypes = [
    TypeDefinitionType.Bytes,
    TypeDefinitionType.Custom,
    TypeDefinitionType.String,
  ];

  public constructor(public readonly definition: Readonly<TypeDefinition>) {
    super();

    if (definition === undefined) {
      throw new Error(`Cannot construct CustomValue without definition.`);
    }
  }

  public encode() {
    const { definition } = this;
    const { items } = definition;

    const value = this.getValueForEncoding();

    if (items) {
      const values = value as CustomValueItems;
      return items.reduce<number[]>((bytes, itemDefinition) => {
        const value = values[itemDefinition.name];
        if (value) {
          return [...bytes, ...this.encodeItem(itemDefinition, value)];
        }

        throw new Error(`Cannot encode item ${itemDefinition.name} as it is undefined.`);
      }, []);
    } else {
      return this.encodeItem(definition, value as Value);
    }
  }

  public decode(bytes: number[]) {
    const { definition } = this;

    if (definition.items) {
      let offset = 0;

      this._value = definition.items.reduce<CustomValueItems>((values, item) => {
        const itemTypeDefinition = item.customType
          ? Configuration.getCustomTypeDefinition(item.customType)
          : item;

        const [count, chunk] = bytesToChunk(bytes.slice(offset), itemTypeDefinition.size, () =>
          this.isVariableSizeSubtype(itemTypeDefinition),
        );

        offset += count;

        return {
          ...values,
          [item.name]: this.decodeItem(itemTypeDefinition, chunk),
        };
      }, {});
    } else {
      this._value = this.decodeItem(definition, bytes);
    }

    return this;
  }

  public fromJSON(payload: unknown) {
    const value = this.extractValueFromJSONPayload(payload);

    try {
      this.setValue(value);
    } catch (e) {
      throw new JSONError(e);
    }

    return this;
  }

  public get name() {
    return this.definition.name;
  }

  public setValue(value: unknown) {
    if (this.definition.items) {
      if (isObject(value)) {
        this.assignValueToItems(value);
      } else {
        throw new Error(`CustomValue ${this.name} value setter expects type of Object.`);
      }
    } else {
      this.assignValue(value);
    }

    return this;
  }

  public valueOf() {
    const { _value: value } = this;
    if (value) {
      return value instanceof Value
        ? value.valueOf()
        : Object.entries(value).reduce<Record<string, unknown>>(
            (all, [name, value]) => ({
              ...all,
              [name]: value.valueOf(),
            }),
            {},
          );
    }
    return null;
  }

  protected assignValue(value: unknown) {
    (this._value = (this._value as Value) || this.createValueInstance(this.definition)).setValue(
      value,
    );
  }

  protected assignValueToItems(values: Record<string, unknown>) {
    const valueMap: CustomValueItems = (this._value = (this._value as CustomValueItems) || {});

    for (const [key, value] of Object.entries(values)) {
      (valueMap[key] =
        valueMap[key] || this.createValueInstance(this.getItemTypeDefinition(key))).setValue(value);
    }
  }

  protected createValueInstance(definition: Readonly<TypeDefinition>) {
    return ValueFactory.createFromDefinition(definition);
  }

  protected decodeItem(definition: TypeDefinition, bytes: number[]) {
    return this.createValueInstance(definition).decode(bytes);
  }

  protected encodeItem(definition: TypeDefinition, value: Value) {
    const { size } = definition.customType
      ? Configuration.getCustomTypeDefinition(definition.customType)
      : definition;
    const bytes = value.encode();

    return size ? bytes : bytesWithSize(bytes);
  }

  protected getItemTypeDefinition(name: string) {
    const definition = this.definition.items!.find((item) => item.name === name);

    if (definition) return definition;

    throw new Error(`Custom type ${this.name} has no member called ${name}.`);
  }

  protected isVariableSizeSubtype({ customType, type }: TypeDefinition) {
    return !!customType || CustomValue.VariableSizeSubtypes.includes(type as TypeDefinitionType);
  }
}
