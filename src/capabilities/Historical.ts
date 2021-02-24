import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Historical extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 18,
  };
  static readonly Name = 'historical';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Historical.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
