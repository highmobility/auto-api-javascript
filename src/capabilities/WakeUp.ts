import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class WakeUp extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 34,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('wake_up'),
      Configuration.getUniversalProperties(),
    );
  }
}
