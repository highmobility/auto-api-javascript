import { JSONError } from '../core/Error';
import { Value } from '../core/Value';

import { isArrayOfNumbers } from '../utils';

export class BytesValue extends Value<number[]> {
  public encode() {
    return [...this.getValueForEncoding()];
  }

  public decode(bytes: number[]) {
    this._value = [...bytes];
    return this;
  }

  public fromJSON(payload: unknown) {
    const value = this.extractValueFromJSONPayload(payload);

    if (value && isArrayOfNumbers(value)) {
      this.setValue(value);
    } else {
      throw new JSONError('Value must be array of numbers.');
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
