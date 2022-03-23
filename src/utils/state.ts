import { default as get } from 'lodash.get';

export const comparePropertyIdentity = <S extends Object>(
  stateA: S,
  stateB: S,
  identityKey?: string,
) => {
  if (identityKey) {
    return get(stateA, `data.${identityKey}`) === get(stateB, `data.${identityKey}`);
  }

  return false;
};
