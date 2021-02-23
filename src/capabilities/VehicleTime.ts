import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class VehicleTime extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 80,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('vehicle_time'),
      Configuration.getUniversalProperties(),
    );
  }
}
