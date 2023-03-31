import { TypeDefinition } from '../types';

import { FormatError } from '../core/Error';
import { NamedEntity } from '../core/NamedEntity';

import { bytesToInt, decimalToHexArray, getNumericInputRange, isInteger } from '../utils';

import { NumericValue } from './NumericValue';

export class IntegerValue extends NumericValue implements NamedEntity {
  public constructor(
    public readonly definition: Readonly<Pick<TypeDefinition, 'name' | 'size' | 'validation'>>,
  ) {
    super(definition);
  }

  public get name() {
    return this.definition.name;
  }

  public get range() {
    return getNumericInputRange(this.size);
  }

  public get size() {
    return this.definition.size || 1;
  }

  public encode() {
    return decimalToHexArray(this.getValueForEncoding(), this.size);
  }

  public decode(bytes: number[]) {
    return this.setValue(bytesToInt(bytes));
  }

  public fromJSON(payload: unknown) {
    if (isInteger(payload)) {
      this.setValue(payload);
    } else {
      throw new FormatError('Value must be an integer.');
    }

    return this;
  }

  public valueOf() {
    return this._value ?? null;
  }
}
