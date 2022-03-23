import { TypeDefinition } from '../types';

import { FormatError } from '../core/Error';
import { NamedEntity } from '../core/NamedEntity';
import { Value } from '../core/Value';

import { base10ToIeee754, ieee754ToBase10, isNumber } from '../utils';

export class FloatValue extends Value<number> implements NamedEntity {
  public constructor(public readonly definition: Readonly<Pick<TypeDefinition, 'name' | 'size'>>) {
    super();
  }

  public get name() {
    return this.definition.name;
  }

  public get size() {
    return this.definition.size || 4;
  }

  public encode() {
    return base10ToIeee754(this.getValueForEncoding(), this.size);
  }

  public decode(bytes: number[]) {
    this._value = ieee754ToBase10(bytes, this.size);
    return this;
  }

  public fromJSON(payload: unknown) {
    if (isNumber(payload)) {
      this.setValue(payload);
    } else {
      throw new FormatError('Value must be a number.');
    }

    return this;
  }

  public setValue(value: number) {
    this._value = value;
    return this;
  }

  public toString() {
    return (this._value ?? NaN).toPrecision(7);
  }

  public valueOf() {
    return this._value !== undefined ? +this.toString() : null;
  }
}
