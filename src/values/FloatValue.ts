import { TypeDefinition } from '../types';

import { FormatError } from '../core/Error';
import { NamedEntity } from '../core/NamedEntity';

import { base10ToIeee754, getNumericInputRange, ieee754ToBase10, isNumber } from '../utils';

import { NumericValue } from './NumericValue';

export class FloatValue extends NumericValue implements NamedEntity {
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
    return this.definition.size || 4;
  }

  public encode() {
    return base10ToIeee754(this.getValueForEncoding(), this.size);
  }

  public decode(bytes: number[]) {
    return this.setValue(ieee754ToBase10(bytes, this.size));
  }

  public fromJSON(payload: unknown) {
    if (isNumber(payload)) {
      this.setValue(payload);
    } else {
      throw new FormatError('Value must be a number.');
    }

    return this;
  }

  public toString() {
    return (this._value ?? NaN).toPrecision(7);
  }

  public valueOf() {
    return this._value !== undefined ? +this.toString() : null;
  }
}
