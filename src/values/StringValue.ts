import { isString } from 'lodash';

import { JSONError } from '../core/Error';
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

  public fromJSON(payload: unknown) {
    const value = this.extractValueFromJSONPayload(payload);

    if (isString(value)) {
      this.setValue(value);
    } else {
      throw new JSONError('Value must be string.');
    }

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
