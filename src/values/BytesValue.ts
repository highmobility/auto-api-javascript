import { Value } from '../core/Value';

export class BytesValue extends Value<number[]> {
  public encode() {
    return [...this.getValueForEncoding()];
  }

  public decode(bytes: number[]) {
    this._value = [...bytes];
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
