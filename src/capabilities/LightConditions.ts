import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class LightConditions extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 84,
  };
  static readonly Name = 'light_conditions';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(LightConditions.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
