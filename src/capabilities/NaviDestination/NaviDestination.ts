import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { ArrivalDuration } from './properties/ArrivalDuration';
import { Coordinates } from './properties/Coordinates';
import { DataSlotsFree } from './properties/DataSlotsFree';
import { DataSlotsMax } from './properties/DataSlotsMax';
import { DestinationName } from './properties/DestinationName';
import { DistanceToDestination } from './properties/DistanceToDestination';

enum Properties {
  ArrivalDuration = 'arrival_duration',
  Coordinates = 'coordinates',
  DataSlotsFree = 'data_slots_free',
  DataSlotsMax = 'data_slots_max',
  DestinationName = 'destination_name',
  DistanceToDestination = 'distance_to_destination',
}

const NaviDestinationDescriptor = {
  category: 'poi',
  identifier: [0, 49],
  name: 'navi_destination',
  prettyName: 'Navi Destination',
  properties: {
    arrival_duration: ArrivalDuration,
    coordinates: Coordinates,
    data_slots_free: DataSlotsFree,
    data_slots_max: DataSlotsMax,
    destination_name: DestinationName,
    distance_to_destination: DistanceToDestination,
  },
  state: [
    ArrivalDuration,
    Coordinates,
    DataSlotsFree,
    DataSlotsMax,
    DestinationName,
    DistanceToDestination,
  ],
};

@Descriptor(NaviDestinationDescriptor)
export class NaviDestination extends Capability<typeof NaviDestinationDescriptor.properties> {
  public static Name = NaviDestinationDescriptor.name;
  public static Properties = Properties;
}
