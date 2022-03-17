import { FormatError } from '../core/Error';
import { Value } from '../core/Value';

import { isArrayOfNumbers } from '../utils';

export class BytesValue extends Value<number[]> {
  public encode() {
    return [...this.getValueForEncoding()];
  }

  public equals(value: BytesValue) {
    const { value: a } = this;
    const { value: b } = value;

    if (a && b) {
      return a.length == b.length && a.every((v, i) => v === b[i]);
    }

    return a === b;
  }

  public decode(bytes: number[]) {
    this._value = [...bytes];
    return this;
  }

  public fromJSON(payload: unknown) {
    if (payload && isArrayOfNumbers(payload)) {
      this.setValue(payload);
    } else {
      throw new FormatError('Value must be an array of numbers.');
    }

    return this;
  }

  public setValue(value: number[]) {
    this._value = value;
    return this;
  }

  public valueOf() {
    return this._value || null;
  }
}
