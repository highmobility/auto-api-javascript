import { isObject } from './misc';

export function getKeyValuePairFromObject<T = unknown>(payload: unknown) {
  if (payloadHasSingleKey(payload)) {
    for (const entry of Object.entries(payload)) {
      return entry as [string, T];
    }
  }

  throw new Error('Expected object with single key and value.');
}

export function getValueFromObject(payload: unknown): undefined | unknown {
  if (payloadHasValueField(payload)) {
    return payload.value;
  }
}

export function payloadHasSingleKey(payload: unknown): payload is Record<string, unknown> {
  return isObject(payload) && Object.keys(payload).length === 1;
}

export function payloadHasValueField<T extends { value: unknown }>(payload: unknown): payload is T {
  return payloadHasSingleKey(payload) && 'value' in payload;
}
