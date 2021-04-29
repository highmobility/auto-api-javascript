import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  AverageFuelConsumption = 'average_fuel_consumption',
  Description = 'description',
  Distance = 'distance',
  DriverName = 'driver_name',
  EcoLevel = 'eco_level',
  EndAddress = 'end_address',
  EndAddressComponents = 'end_address_components',
  EndCoordinates = 'end_coordinates',
  EndOdometer = 'end_odometer',
  EndTime = 'end_time',
  Event = 'event',
  MaximumSpeed = 'maximum_speed',
  StartAddress = 'start_address',
  StartAddressComponents = 'start_address_components',
  StartCoordinates = 'start_coordinates',
  StartOdometer = 'start_odometer',
  StartTime = 'start_time',
  Thresholds = 'thresholds',
  TotalFuelConsumption = 'total_fuel_consumption',
  TotalIdleFuelConsumption = 'total_idle_fuel_consumption',
  Type = 'type',
}

export class Trips extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 106,
  };
  static readonly Name = 'trips';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Trips.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
