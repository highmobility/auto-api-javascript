import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { AverageFuelConsumption } from './properties/AverageFuelConsumption';
import { Description } from './properties/Description';
import { Distance } from './properties/Distance';
import { DriverName } from './properties/DriverName';
import { EcoLevel } from './properties/EcoLevel';
import { EndAddress } from './properties/EndAddress';
import { EndAddressComponents } from './properties/EndAddressComponents';
import { EndCoordinates } from './properties/EndCoordinates';
import { EndOdometer } from './properties/EndOdometer';
import { EndTime } from './properties/EndTime';
import { Event } from './properties/Event';
import { MaximumSpeed } from './properties/MaximumSpeed';
import { StartAddress } from './properties/StartAddress';
import { StartAddressComponents } from './properties/StartAddressComponents';
import { StartCoordinates } from './properties/StartCoordinates';
import { StartOdometer } from './properties/StartOdometer';
import { StartTime } from './properties/StartTime';
import { Thresholds } from './properties/Thresholds';
import { TotalFuelConsumption } from './properties/TotalFuelConsumption';
import { TotalIdleFuelConsumption } from './properties/TotalIdleFuelConsumption';
import { Type } from './properties/Type';

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

const TripsDescriptor = {
  category: 'poi',
  identifier: [0, 106],
  name: 'trips',
  prettyName: 'Trips',
  properties: {
    average_fuel_consumption: AverageFuelConsumption,
    description: Description,
    distance: Distance,
    driver_name: DriverName,
    eco_level: EcoLevel,
    end_address: EndAddress,
    end_address_components: EndAddressComponents,
    end_coordinates: EndCoordinates,
    end_odometer: EndOdometer,
    end_time: EndTime,
    event: Event,
    maximum_speed: MaximumSpeed,
    start_address: StartAddress,
    start_address_components: StartAddressComponents,
    start_coordinates: StartCoordinates,
    start_odometer: StartOdometer,
    start_time: StartTime,
    thresholds: Thresholds,
    total_fuel_consumption: TotalFuelConsumption,
    total_idle_fuel_consumption: TotalIdleFuelConsumption,
    type: Type,
  },
  state: [
    AverageFuelConsumption,
    Description,
    Distance,
    DriverName,
    EcoLevel,
    EndAddress,
    EndAddressComponents,
    EndCoordinates,
    EndOdometer,
    EndTime,
    Event,
    MaximumSpeed,
    StartAddress,
    StartAddressComponents,
    StartCoordinates,
    StartOdometer,
    StartTime,
    Thresholds,
    TotalFuelConsumption,
    TotalIdleFuelConsumption,
    Type,
  ],
};

@Descriptor(TripsDescriptor)
export class Trips extends Capability<typeof TripsDescriptor.properties> {
  public static Name = TripsDescriptor.name;
  public static Properties = Properties;
}
