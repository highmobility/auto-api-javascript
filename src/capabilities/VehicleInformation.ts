import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class VehicleInformation extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 20,
  };
  static readonly Name = 'vehicle_information';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(VehicleInformation.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
