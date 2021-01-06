import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class ParkingBrake extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 88,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('parking_brake'),
      Configuration.getUniversalProperties(),
    );
  }
}
