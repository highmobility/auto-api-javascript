import { Value } from '../core/Value';

import { base10ToIeee754, ieee754ToBase10 } from '../utils';

export class FloatValue extends Value<number> {
  public constructor(public readonly size = 4) {
    super();
  }

  public encode() {
    return base10ToIeee754(this.getValueForEncoding(), this.size);
  }

  public decode(bytes: number[]) {
    this._value = ieee754ToBase10(bytes, this.size);
    return this;
  }

  public setValue(value: number) {
    this._value = value;
    return this;
  }

  public toString() {
    return (this._value || NaN).toPrecision(7);
  }

  public valueOf() {
    return this._value !== undefined ? +this.toString() : null;
  }
}
