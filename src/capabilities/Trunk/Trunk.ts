import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Lock } from './properties/Lock';
import { LockSafety } from './properties/LockSafety';
import { Position } from './properties/Position';

enum Properties {
  Lock = 'lock',
  LockSafety = 'lock_safety',
  Position = 'position',
}

const TrunkDescriptor = {
  category: 'digital_key',
  identifier: [0, 33],
  name: 'trunk',
  prettyName: 'Trunk',
  properties: {
    lock: Lock,
    lock_safety: LockSafety,
    position: Position,
  },
  state: [Lock, LockSafety, Position],
};

@Descriptor(TrunkDescriptor)
export class Trunk extends Capability<typeof TrunkDescriptor.properties> {
  public static Name = TrunkDescriptor.name;
  public static Properties = Properties;
}
