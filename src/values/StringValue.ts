import { TypeDefinition } from '../types';

import { FormatError } from '../core/Error';
import { NamedEntity } from '../core/NamedEntity';
import { Value } from '../core/Value';

import { byteArrayToUtfString, isString, utfStringToByteArray } from '../utils';

export class StringValue extends Value<string> implements NamedEntity {
  public constructor(public readonly definition: Readonly<Pick<TypeDefinition, 'name' | 'size'>>) {
    super();
  }

  public get name() {
    return this.definition.name;
  }

  public encode() {
    return utfStringToByteArray(this.getValueForEncoding());
  }

  public decode(bytes: number[]) {
    this._value = byteArrayToUtfString(bytes);
    return this;
  }

  public fromJSON(payload: unknown) {
    if (isString(payload)) {
      this.setValue(payload);
    } else {
      throw new FormatError('Value must be a string.');
    }

    return this;
  }

  public setValue(value: string) {
    this._value = value;
    return this;
  }

  public valueOf() {
    return this._value === undefined ? null : this._value;
  }
}
