import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class LightConditions extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 84,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('light_conditions'),
      Configuration.getUniversalProperties(),
    );
  }
}
