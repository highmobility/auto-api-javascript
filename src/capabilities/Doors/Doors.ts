import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { InsideLocks } from './properties/InsideLocks';
import { InsideLocksState } from './properties/InsideLocksState';
import { Locks } from './properties/Locks';
import { LocksState } from './properties/LocksState';
import { Positions } from './properties/Positions';

enum Properties {
  InsideLocks = 'inside_locks',
  InsideLocksState = 'inside_locks_state',
  Locks = 'locks',
  LocksState = 'locks_state',
  Positions = 'positions',
}

const DoorsDescriptor = {
  category: 'digital_key',
  identifier: [0, 32],
  name: 'doors',
  prettyName: 'Doors',
  properties: {
    inside_locks: InsideLocks,
    inside_locks_state: InsideLocksState,
    locks: Locks,
    locks_state: LocksState,
    positions: Positions,
  },
  state: [InsideLocks, InsideLocksState, Locks, LocksState, Positions],
};

@Descriptor(DoorsDescriptor)
export class Doors extends Capability<typeof DoorsDescriptor.properties> {
  public static Name = DoorsDescriptor.name;
  public static Properties = Properties;
}
