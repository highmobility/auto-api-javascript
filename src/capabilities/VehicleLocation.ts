import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class VehicleLocation extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 48,
  };
  static readonly Name = 'vehicle_location';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(VehicleLocation.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
