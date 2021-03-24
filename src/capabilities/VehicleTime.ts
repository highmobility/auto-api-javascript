import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  VehicleTime = 'vehicle_time',
}

export class VehicleTime extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 80,
  };
  static readonly Name = 'vehicle_time';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(VehicleTime.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
