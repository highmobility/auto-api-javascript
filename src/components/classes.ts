import { Availability } from './Availability';
import { Data } from './Data';
import { Failure } from './Failure';
import { Timestamp } from './Timestamp';

export const ClassMap = {
  data: Data,
  timestamp: Timestamp,
  failure: Failure,
  availability: Availability,
};

export const ComponentMap: Record<number, ComponentName> = {
  1: 'data',
  2: 'timestamp',
  3: 'failure',
  5: 'availability',
};

export type ComponentName = 'data' | 'timestamp' | 'failure' | 'availability';
