import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  States = 'states',
}

export class VehicleStatus extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 17,
  };
  static readonly Name = 'vehicle_status';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(VehicleStatus.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
