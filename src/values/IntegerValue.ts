import { JSONError } from '../core/Error';
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
    const value = this.extractValueFromJSONPayload(payload);

    if (isInteger(value)) {
      this.setValue(value);
    } else {
      throw new JSONError('Value must be integer.');
    }

    return this;
  }

  public setValue(value: number) {
    this._value = value;
    return this;
  }

  public valueOf() {
    return this._value !== undefined ? this._value : null;
  }
}
