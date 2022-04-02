import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const EventDescriptor = {
  values: {
    accident_reported: 14,
    authorization_changed: 4,
    battery_guard_warning: 17,
    breakdown_reported: 16,
    dashboard_lights_changed: 12,
    emergency_reported: 15,
    engine_changed: 18,
    fleet_clearance_changed: 19,
    harsh_acceleration_pedal_position_triggered: 7,
    harsh_acceleration_triggered: 6,
    harsh_braking_triggered: 8,
    harsh_cornering_triggered: 9,
    ignition_changed: 13,
    maintenance_changed: 11,
    ping: 0,
    seat_belt_triggered: 10,
    tire_pressure_changed: 5,
    trip_ended: 2,
    trip_started: 1,
    vehicle_location_changed: 3,
  },
  size: 1,
};

@Descriptor(EventDescriptor)
export class Event extends Enum<keyof typeof EventDescriptor.values> {}
