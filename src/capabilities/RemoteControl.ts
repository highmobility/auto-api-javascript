import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Angle = 'angle',
  ControlMode = 'control_mode',
  Speed = 'speed',
}

export class RemoteControl extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 39,
  };
  static readonly Name = 'remote_control';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(RemoteControl.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
