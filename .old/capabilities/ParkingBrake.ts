import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Status = 'status',
}

export class ParkingBrake extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 88,
  };
  static readonly Name = 'parking_brake';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(ParkingBrake.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
