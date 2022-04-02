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

const HoodDescriptor = {
  category: 'digital_key',
  identifier: [0, 103],
  name: 'hood',
  prettyName: 'Hood',
  properties: {
    lock: Lock,
    lock_safety: LockSafety,
    position: Position,
  },
  state: [Lock, LockSafety, Position],
};

@Descriptor(HoodDescriptor)
export class Hood extends Capability<typeof HoodDescriptor.properties> {
  public static Name = HoodDescriptor.name;
  public static Properties = Properties;
}
