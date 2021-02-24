import { getValueFromObject } from '../utils';

import { Serializable } from './Serializable';

export abstract class Value<D = unknown, S = D> extends Serializable {
  protected _value: D | undefined;

  public abstract setValue(value: S): this;

  public toJSON() {
    return { value: this.valueOf() };
  }

  protected extractValueFromJSONPayload(payload: unknown) {
    const value = getValueFromObject(payload);
    return value !== undefined ? value : payload;
  }

  protected getValueForEncoding() {
    if (this._value === undefined) {
      throw new Error('Cannot encode undefined value.');
    }
    return this._value;
  }
}
