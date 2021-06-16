import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Lock = 'lock',
  LockSafety = 'lock_safety',
  Position = 'position',
}

export class Hood extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 103,
  };
  static readonly Name = 'hood';
  static readonly Properties = Properties;
  constructor() {
    super(Configuration.getCapabilityDefinition(Hood.Name), Configuration.getUniversalProperties());
  }
}
