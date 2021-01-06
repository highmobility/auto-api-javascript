import { Value } from '../core/Value';

import { bytesToInt, decimalToHexArray } from '../utils';

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

  public setValue(value: number) {
    this._value = value;
    return this;
  }

  public valueOf() {
    return this._value !== undefined ? this._value : null;
  }
}
