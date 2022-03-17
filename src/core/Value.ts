import { Serializable } from './Serializable';

export abstract class Value<D = unknown, S = D> extends Serializable {
  protected _value: D | undefined;

  public get value() {
    return this._value;
  }

  public abstract setValue(value: S): this;

  public equals(value: Value<D, S>) {
    return this.value === value.value;
  }

  public toJSON() {
    return { value: this.valueOf() };
  }

  protected getValueForEncoding() {
    if (this._value === undefined) {
      throw new Error('Cannot encode undefined value.');
    }
    return this._value;
  }
}
