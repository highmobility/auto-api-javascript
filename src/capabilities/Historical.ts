import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Historical extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 18,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('historical'),
      Configuration.getUniversalProperties(),
    );
  }
}
