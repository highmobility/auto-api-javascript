import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Altitude } from './properties/Altitude';
import { Coordinates } from './properties/Coordinates';
import { GpsSignalStrength } from './properties/GpsSignalStrength';
import { GpsSource } from './properties/GpsSource';
import { Heading } from './properties/Heading';
import { Precision } from './properties/Precision';

enum Properties {
  Altitude = 'altitude',
  Coordinates = 'coordinates',
  GpsSignalStrength = 'gps_signal_strength',
  GpsSource = 'gps_source',
  Heading = 'heading',
  Precision = 'precision',
}

const VehicleLocationDescriptor = {
  category: 'poi',
  identifier: [0, 48],
  name: 'vehicle_location',
  prettyName: 'Vehicle Location',
  properties: {
    altitude: Altitude,
    coordinates: Coordinates,
    gps_signal_strength: GpsSignalStrength,
    gps_source: GpsSource,
    heading: Heading,
    precision: Precision,
  },
  state: [Altitude, Coordinates, GpsSignalStrength, GpsSource, Heading, Precision],
};

@Descriptor(VehicleLocationDescriptor)
export class VehicleLocation extends Capability<typeof VehicleLocationDescriptor.properties> {
  public static Name = VehicleLocationDescriptor.name;
  public static Properties = Properties;
}
