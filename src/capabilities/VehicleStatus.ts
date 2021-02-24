import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class VehicleStatus extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 17,
  };
  static readonly Name = 'vehicle_status';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(VehicleStatus.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
