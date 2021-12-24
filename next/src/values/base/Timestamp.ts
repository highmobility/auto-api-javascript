import { Value } from './Value';

export class Timestamp extends Value<Date, Date | string> {
  public constructor(value: Date | string = new Date()) {
    super(value);
  }

  public setValue(value: Date | string) {
    this.value = typeof value === 'string' ? new Date(value) : value;
    return this;
  }
}
