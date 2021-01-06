import { isPlainObject } from 'lodash';

export function isEmptyObject(value: Record<string, unknown>) {
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return isPlainObject(value);
}
