import { Value } from './Value';

export class String extends Value<string> {
  public valueOf() {
    return this.value;
  }
}
