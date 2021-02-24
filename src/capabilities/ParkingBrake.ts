import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class ParkingBrake extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 88,
  };
  static readonly Name = 'parking_brake';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(ParkingBrake.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
