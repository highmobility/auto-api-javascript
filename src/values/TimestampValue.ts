import { FormatError } from '../core/Error';
import { Value } from '../core/Value';

import { bytesToInt, decimalToHexArray, isString } from '../utils';

export class TimestampValue extends Value<Date, Date | string> {
  public constructor(value = new Date()) {
    super();
    this.setValue(value);
  }

  public encode() {
    return [...decimalToHexArray(this.getValueForEncoding().getTime(), 8)];
  }

  public equals(value: TimestampValue) {
    const { value: a } = this;
    const { value: b } = value;

    if (a && b) {
      return a.getTime() === b.getTime();
    }

    return a === b;
  }

  public decode(bytes: number[]) {
    this._value = new Date(bytesToInt(bytes));
    return this;
  }

  public fromJSON(payload: unknown) {
    if (isString(payload)) {
      this.setValue(new Date(payload));
    } else {
      throw new FormatError('Value must be a string in ISO date-time format.');
    }

    return this;
  }

  public setValue(value: Date | string) {
    this._value = value instanceof Date ? value : new Date(value);
    return this;
  }

  public valueOf() {
    return this._value ? this._value.toISOString() : null;
  }
}
