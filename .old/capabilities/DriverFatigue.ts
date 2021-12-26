import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  DetectedFatigueLevel = 'detected_fatigue_level',
}

export class DriverFatigue extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 65,
  };
  static readonly Name = 'driver_fatigue';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(DriverFatigue.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
