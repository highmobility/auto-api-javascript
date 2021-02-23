import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class VehicleLocation extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 48,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('vehicle_location'),
      Configuration.getUniversalProperties(),
    );
  }
}
