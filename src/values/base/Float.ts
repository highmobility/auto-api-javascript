import { Value } from './Value';

export class Float extends Value<number, number> {
  public valueOf() {
    return this.value;
  }
}
