import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Altitude = 'altitude',
  Coordinates = 'coordinates',
  GpsSignalStrength = 'gps_signal_strength',
  GpsSource = 'gps_source',
  Heading = 'heading',
  Precision = 'precision',
}

export class VehicleLocation extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 48,
  };
  static readonly Name = 'vehicle_location';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(VehicleLocation.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
