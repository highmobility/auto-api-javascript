import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Angle } from './properties/Angle';
import { ControlMode } from './properties/ControlMode';
import { Speed } from './properties/Speed';

enum Properties {
  Angle = 'angle',
  ControlMode = 'control_mode',
  Speed = 'speed',
}

const RemoteControlDescriptor = {
  category: 'parking',
  identifier: [0, 39],
  name: 'remote_control',
  prettyName: 'Remote Control',
  properties: {
    angle: Angle,
    control_mode: ControlMode,
    speed: Speed,
  },
  state: [Angle, ControlMode],
};

@Descriptor(RemoteControlDescriptor)
export class RemoteControl extends Capability<typeof RemoteControlDescriptor.properties> {
  public static Name = RemoteControlDescriptor.name;
  public static Properties = Properties;
}
