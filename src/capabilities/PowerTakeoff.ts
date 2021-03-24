import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Engaged = 'engaged',
  Status = 'status',
}

export class PowerTakeoff extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 101,
  };
  static readonly Name = 'power_takeoff';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(PowerTakeoff.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
