import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { DriversCardsPresent } from './properties/DriversCardsPresent';
import { DriversTimeStates } from './properties/DriversTimeStates';
import { DriversWorkingStates } from './properties/DriversWorkingStates';
import { VehicleDirection } from './properties/VehicleDirection';
import { VehicleMotion } from './properties/VehicleMotion';
import { VehicleOverspeed } from './properties/VehicleOverspeed';
import { VehicleSpeed } from './properties/VehicleSpeed';

enum Properties {
  DriversCardsPresent = 'drivers_cards_present',
  DriversTimeStates = 'drivers_time_states',
  DriversWorkingStates = 'drivers_working_states',
  VehicleDirection = 'vehicle_direction',
  VehicleMotion = 'vehicle_motion',
  VehicleOverspeed = 'vehicle_overspeed',
  VehicleSpeed = 'vehicle_speed',
}

const TachographDescriptor = {
  category: 'heavy_duty',
  identifier: [0, 100],
  name: 'tachograph',
  prettyName: 'Tachograph',
  properties: {
    drivers_cards_present: DriversCardsPresent,
    drivers_time_states: DriversTimeStates,
    drivers_working_states: DriversWorkingStates,
    vehicle_direction: VehicleDirection,
    vehicle_motion: VehicleMotion,
    vehicle_overspeed: VehicleOverspeed,
    vehicle_speed: VehicleSpeed,
  },
  state: [
    DriversCardsPresent,
    DriversTimeStates,
    DriversWorkingStates,
    VehicleDirection,
    VehicleMotion,
    VehicleOverspeed,
    VehicleSpeed,
  ],
};

@Descriptor(TachographDescriptor)
export class Tachograph extends Capability<typeof TachographDescriptor.properties> {
  public static Name = TachographDescriptor.name;
  public static Properties = Properties;
}
