import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class VehicleStatus extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 17,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('vehicle_status'),
      Configuration.getUniversalProperties(),
    );
  }
}
