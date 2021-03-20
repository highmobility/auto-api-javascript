import { base10ToIeee754Double, ieee754DoubleToBase10 } from '../utils';

import { FloatValue } from './FloatValue';

export class DoubleValue extends FloatValue {
  public constructor(public readonly size = 8) {
    super(size);
  }

  public encode() {
    return base10ToIeee754Double(this.getValueForEncoding(), this.size);
  }

  public decode(bytes: number[]) {
    this._value = ieee754DoubleToBase10(bytes, this.size);
    return this;
  }

  public toString() {
    return (this._value !== undefined ? this._value : NaN).toPrecision(15);
  }
}
