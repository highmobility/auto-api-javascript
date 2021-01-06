import { Value } from '../core/Value';

import { utfStringToByteArray } from '../utils';

export class StringValue extends Value<string> {
  public encode() {
    return utfStringToByteArray(this.getValueForEncoding());
  }

  public decode(bytes: number[]) {
    this._value = Buffer.from(bytes).toString('utf8').replace(/\0/g, '');
    return this;
  }

  public setValue(value: string) {
    this._value = value;
    return this;
  }

  public valueOf() {
    return this._value || null;
  }
}
