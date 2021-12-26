import { IntegerValue } from './IntegerValue';

export class UintValue extends IntegerValue {
  public constructor(public readonly size = 1) {
    super(size);
  }
}
