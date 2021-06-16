import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  ArrivalDuration = 'arrival_duration',
  Coordinates = 'coordinates',
  DataSlotsFree = 'data_slots_free',
  DataSlotsMax = 'data_slots_max',
  DestinationName = 'destination_name',
  DistanceToDestination = 'distance_to_destination',
}

export class NaviDestination extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 49,
  };
  static readonly Name = 'navi_destination';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(NaviDestination.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
