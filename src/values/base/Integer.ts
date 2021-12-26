import { Value } from './Value';

export class Integer extends Value<number> {
  public valueOf() {
    return this.value;
  }
}
