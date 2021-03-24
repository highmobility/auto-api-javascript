import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Lock = 'lock',
  LockSafety = 'lock_safety',
  Position = 'position',
}

export class Trunk extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 33,
  };
  static readonly Name = 'trunk';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Trunk.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
