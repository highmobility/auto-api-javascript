import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  DriversCardsPresent = 'drivers_cards_present',
  DriversTimeStates = 'drivers_time_states',
  DriversWorkingStates = 'drivers_working_states',
  VehicleDirection = 'vehicle_direction',
  VehicleMotion = 'vehicle_motion',
  VehicleOverspeed = 'vehicle_overspeed',
  VehicleSpeed = 'vehicle_speed',
}

export class Tachograph extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 100,
  };
  static readonly Name = 'tachograph';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Tachograph.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
