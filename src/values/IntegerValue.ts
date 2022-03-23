import { TypeDefinition } from '../types';

import { FormatError } from '../core/Error';
import { NamedEntity } from '../core/NamedEntity';
import { Value } from '../core/Value';

import { bytesToInt, decimalToHexArray, isInteger } from '../utils';

export class IntegerValue extends Value<number> implements NamedEntity {
  public constructor(public readonly definition: Readonly<Pick<TypeDefinition, 'name' | 'size'>>) {
    super();
  }

  public get name() {
    return this.definition.name;
  }

  public get size() {
    return this.definition.size || 1;
  }

  public encode() {
    return decimalToHexArray(this.getValueForEncoding(), this.size);
  }

  public decode(bytes: number[]) {
    this._value = bytesToInt(bytes);
    return this;
  }

  public fromJSON(payload: unknown) {
    if (isInteger(payload)) {
      this.setValue(payload);
    } else {
      throw new FormatError('Value must be an integer.');
    }

    return this;
  }

  public setValue(value: number) {
    this._value = value;
    return this;
  }

  public valueOf() {
    return this._value ?? null;
  }
}
