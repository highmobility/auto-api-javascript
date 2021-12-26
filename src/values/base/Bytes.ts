import { Value } from './Value';

export class Bytes extends Value<number[]> {
  public valueOf() {
    return this.value;
  }
}
