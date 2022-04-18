import { Configuration } from '../core/Configuration';
import { FormatError } from '../core/Error';
import { NamedEntity } from '../core/NamedEntity';
import { Value } from '../core/Value';

import { TypeDefinition, TypeDefinitionType } from '../types';
import { ValueFactory } from '../factories/ValueFactory';

import { bytesToChunk, bytesWithSize, isObject } from '../utils';

type CustomValueDefinition = Omit<TypeDefinition, 'items'> &
  Required<Pick<TypeDefinition, 'items'>>;
type CustomValueItems = Record<string, Value>;
type CustomValueSetter = unknown;

export class CustomValue extends Value<CustomValueItems, CustomValueSetter> implements NamedEntity {
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
    const { items } = this.definition as CustomValueDefinition;

    const values = this.getValueForEncoding();
    return items.reduce<number[]>((bytes, itemDefinition) => {
      const value = values[itemDefinition.name];
      if (value) {
        return [...bytes, ...this.encodeItem(itemDefinition, value)];
      }

      throw new Error(`Cannot encode item ${itemDefinition.name} as it is undefined.`);
    }, []);
  }

  public equals(value: CustomValue) {
    const { value: a } = this;
    const { value: b } = value;

    if (a && b) {
      return Object.entries(a).every(([k, v]) => {
        return b[k] && v.equals(b[k]);
      });
    }

    return a === b;
  }

  public decode(bytes: number[]) {
    const { items } = this.definition as CustomValueDefinition;

    const [values] = items.reduce<[CustomValueItems, number]>(
      ([values, offset], item) => {
        const itemTypeDefinition = Configuration.getTypeDefinitionFromRef(item);

        const [count, chunk] = bytesToChunk(bytes.slice(offset), itemTypeDefinition.size, () =>
          this.isVariableSizeSubtype(itemTypeDefinition),
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

    this._value = values;

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

  public get items(): Readonly<CustomValueItems> | undefined {
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
    if (isObject(value)) {
      this.assignValueToItems(value);
    } else {
      throw new Error(`CustomValue ${this.name} value setter expects type of Object.`);
    }

    return this;
  }

  public valueOf() {
    const { value, definition } = this;
    const { items } = definition as CustomValueDefinition;

    if (value) {
      return items.reduce<Record<string, unknown>>(
        (all, { name }) => ({
          ...all,
          [name]: value[name].valueOf(),
        }),
        {},
      );
    }
    return null;
  }

  protected assignValueToItems(values: Record<string, unknown>) {
    const { items } = this.definition as CustomValueDefinition;
    const valueMap: CustomValueItems = (this._value = (this._value as CustomValueItems) || {});

    for (const { name } of items) {
      (valueMap[name] =
        valueMap[name] || this.createValueInstance(this.getItemTypeDefinition(name))).setValue(
        values[name],
      );
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

    return size ? bytes : bytesWithSize(bytes);
  }

  protected isVariableSizeSubtype({ customType, type }: TypeDefinition) {
    return !!customType || CustomValue.VariableSizeSubtypes.includes(type as TypeDefinitionType);
  }
}
