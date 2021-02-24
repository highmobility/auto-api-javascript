import { isFinite, isPlainObject } from 'lodash';

export function isArrayOfNumbers(value: unknown): value is number[] {
  return Array.isArray(value) && value.every(isInteger);
}

export function isEmptyObject(value: Record<string, unknown>) {
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

export function isInteger(value: unknown): value is number {
  return Number.isInteger(value);
}

export function isNumber(value: unknown): value is number {
  return isFinite(value);
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return isPlainObject(value);
}
