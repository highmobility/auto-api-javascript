import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  CurrentChassisPosition = 'current_chassis_position',
  CurrentSpringRates = 'current_spring_rates',
  DrivingMode = 'driving_mode',
  MaximumChassisPosition = 'maximum_chassis_position',
  MaximumSpringRates = 'maximum_spring_rates',
  MinimumChassisPosition = 'minimum_chassis_position',
  MinimumSpringRates = 'minimum_spring_rates',
  SportChrono = 'sport_chrono',
}

export class ChassisSettings extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 83,
  };
  static readonly Name = 'chassis_settings';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(ChassisSettings.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
