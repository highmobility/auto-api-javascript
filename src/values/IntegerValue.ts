import { FormatError } from '../core/Error';
import { Value } from '../core/Value';

import { bytesToInt, decimalToHexArray, isInteger } from '../utils';

export class IntegerValue extends Value<number> {
  public constructor(public readonly size = 1) {
    super();
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
