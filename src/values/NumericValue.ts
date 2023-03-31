import { NumericRange, TypeDefinition } from '../types';

import { Value } from '../core/Value';

import { clamp } from '../utils';

export abstract class NumericValue extends Value<number> {
  public constructor(public readonly definition: Readonly<Pick<TypeDefinition, 'validation'>>) {
    super();
  }

  public abstract get range(): NumericRange;

  public get validation(): NumericRange | undefined {
    const { validation } = this.definition;

    if (validation) {
      const match = validation.match(/min:(.*)\|max:(.*)/);
      if (match) {
        return {
          min: Number(match[1]),
          max: Number(match[2]),
        };
      }
    }
  }

  public clamp(value: number) {
    const { min, max } = this.validation || this.range;

    return clamp(value, min, max);
  }

  public setValue(value: number) {
    this._value = this.clamp(value);
    return this;
  }
}
