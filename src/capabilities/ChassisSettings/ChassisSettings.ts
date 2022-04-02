import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { CurrentChassisPosition } from './properties/CurrentChassisPosition';
import { CurrentSpringRates } from './properties/CurrentSpringRates';
import { DrivingMode } from './properties/DrivingMode';
import { MaximumChassisPosition } from './properties/MaximumChassisPosition';
import { MaximumSpringRates } from './properties/MaximumSpringRates';
import { MinimumChassisPosition } from './properties/MinimumChassisPosition';
import { MinimumSpringRates } from './properties/MinimumSpringRates';
import { SportChrono } from './properties/SportChrono';

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

const ChassisSettingsDescriptor = {
  category: 'chassis',
  identifier: [0, 83],
  name: 'chassis_settings',
  prettyName: 'Chassis Settings',
  properties: {
    current_chassis_position: CurrentChassisPosition,
    current_spring_rates: CurrentSpringRates,
    driving_mode: DrivingMode,
    maximum_chassis_position: MaximumChassisPosition,
    maximum_spring_rates: MaximumSpringRates,
    minimum_chassis_position: MinimumChassisPosition,
    minimum_spring_rates: MinimumSpringRates,
    sport_chrono: SportChrono,
  },
  state: [
    CurrentChassisPosition,
    CurrentSpringRates,
    DrivingMode,
    MaximumChassisPosition,
    MaximumSpringRates,
    MinimumChassisPosition,
    MinimumSpringRates,
    SportChrono,
  ],
};

@Descriptor(ChassisSettingsDescriptor)
export class ChassisSettings extends Capability<typeof ChassisSettingsDescriptor.properties> {
  public static Name = ChassisSettingsDescriptor.name;
  public static Properties = Properties;
}
