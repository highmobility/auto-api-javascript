import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  ConvertibleRoofState = 'convertible_roof_state',
  Dimming = 'dimming',
  Position = 'position',
  SunroofRainEvent = 'sunroof_rain_event',
  SunroofState = 'sunroof_state',
  SunroofTiltState = 'sunroof_tilt_state',
  TiltPosition = 'tilt_position',
}

export class RooftopControl extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 37,
  };
  static readonly Name = 'rooftop_control';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(RooftopControl.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
