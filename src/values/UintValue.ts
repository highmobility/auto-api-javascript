import { getNumericInputRange } from '../utils';

import { IntegerValue } from './IntegerValue';

export class UintValue extends IntegerValue {
  public get range() {
    return getNumericInputRange(this.size, true);
  }
}
