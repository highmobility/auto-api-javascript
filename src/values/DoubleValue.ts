import { base10ToIeee754Double, ieee754DoubleToBase10 } from '../utils';

import { FloatValue } from './FloatValue';

export class DoubleValue extends FloatValue {
  public get size() {
    return this.definition.size || 8;
  }

  public encode() {
    return base10ToIeee754Double(this.getValueForEncoding(), this.size);
  }

  public decode(bytes: number[]) {
    return this.setValue(ieee754DoubleToBase10(bytes, this.size));
  }

  public toString() {
    return (this._value ?? NaN).toPrecision(15);
  }
}
