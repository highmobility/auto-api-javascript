import { Configuration } from '../core/Configuration';
import { FormatError } from '../core/Error';
import { NamedEntity } from '../core/NamedEntity';
import { Value } from '../core/Value';

import { TypeDefinition, TypeDefinitionType } from '../types';
import { ValueFactory } from '../factories/ValueFactory';

import { bytesToChunk, bytesWithSize, getKeyValuePairFromObject, isObject, last } from '../utils';

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

    if (!definition) {
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

  public equals(value: CustomValue) {
    const { value: a } = this;
    const { value: b } = value;

    if (a && b) {
      if (this.hasItems && value.hasItems) {
        const items = value.items as CustomValueItems;
        return Object.entries(this.items as CustomValueItems).every(([k, v]) => {
          return items[k] && v.equals(items[k]);
        });
      }

      if (a instanceof Value && b instanceof Value) {
        return a.equals(b);
      }
    }

    return a === b;
  }

  public decode(bytes: number[]) {
    const { definition, hasItems } = this;
    const items = definition.items || [definition];

    const [values] = items.reduce<[CustomValueItems, number]>(
      ([values, offset], item) => {
        const itemTypeDefinition = Configuration.getTypeDefinitionFromRef(item);

        const [count, chunk] = bytesToChunk(bytes.slice(offset), itemTypeDefinition.size, () =>
          this.isVariableSizeSubtype(itemTypeDefinition, hasItems),
        );

        return [
          {
            ...values,
            [item.name]: this.decodeItem(itemTypeDefinition, chunk),
          },
          offset + count,
        ];
      },
      [{}, 0],
    );

    this._value = hasItems ? values : (last(getKeyValuePairFromObject<Value>(values)) as Value);

    return this;
  }

  public fromJSON(payload: unknown) {
    try {
      this.setValue(payload);
    } catch (e) {
      throw new FormatError(e as Error);
    }

    return this;
  }

  public get hasItems() {
    return !!this.definition.items;
  }

  public get items(): Readonly<CustomValueData> | undefined {
    return this._value;
  }

  public get name() {
    return this.definition.name;
  }

  public getItemTypeDefinition(name: string) {
    const definition = this.definition.items!.find((item) => item.name === name);

    if (!definition) {
      throw new Error(`Custom type ${this.name} has no member called ${name}.`);
    }

    return definition;
  }

  public setValue(value: unknown) {
    if (this.hasItems) {
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
    const { value } = this;
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
    const { size } = Configuration.getTypeDefinitionFromRef(definition);
    const bytes = value.encode();

    return size || !this.hasItems ? bytes : bytesWithSize(bytes);
  }

  protected isVariableSizeSubtype({ customType, type }: TypeDefinition, hasItems = true) {
    return (
      hasItems &&
      (!!customType || CustomValue.VariableSizeSubtypes.includes(type as TypeDefinitionType))
    );
  }
}
