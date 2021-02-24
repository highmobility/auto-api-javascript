import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class RooftopControl extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 37,
  };
  static readonly Name = 'rooftop_control';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(RooftopControl.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
