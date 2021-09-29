export function getArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

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

export function isString(value: unknown): value is string {
  return typeof value === 'string' || value instanceof String;
}

export function isInteger(value: unknown): value is number {
  return Number.isInteger(value);
}

export function isNumber(value: unknown): value is number {
  return Number.isFinite(value);
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export function last<T>(array: ArrayLike<T>): T {
  return array[array.length - 1];
}
