import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class VehicleInformation extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 20,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('vehicle_information'),
      Configuration.getUniversalProperties(),
    );
  }
}
