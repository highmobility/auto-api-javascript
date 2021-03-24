import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  RouteIncline = 'route_incline',
  WheelSuspension = 'wheel_suspension',
}

export class Offroad extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 82,
  };
  static readonly Name = 'offroad';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Offroad.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
