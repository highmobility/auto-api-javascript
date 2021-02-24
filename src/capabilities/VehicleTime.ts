import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class VehicleTime extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 80,
  };
  static readonly Name = 'vehicle_time';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(VehicleTime.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
