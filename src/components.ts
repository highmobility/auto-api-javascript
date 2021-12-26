import { Availability, Failure } from './values/custom';
import { Timestamp } from './values/base/Timestamp';
import { Value } from './values/base/Value';

export const PropertyComponents = {
  data: {
    id: 1,
    value: Value,
  },
  timestamp: {
    id: 2,
    value: Timestamp,
  },
  failure: {
    id: 3,
    value: Failure,
  },
  availability: {
    id: 5,
    value: Availability,
  },
};
