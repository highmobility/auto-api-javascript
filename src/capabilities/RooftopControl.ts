import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class RooftopControl extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 37,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('rooftop_control'),
      Configuration.getUniversalProperties(),
    );
  }
}
