import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  InsideLocks = 'inside_locks',
  InsideLocksState = 'inside_locks_state',
  Locks = 'locks',
  LocksState = 'locks_state',
  Positions = 'positions',
}

export class Doors extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 32,
  };
  static readonly Name = 'doors';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Doors.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
