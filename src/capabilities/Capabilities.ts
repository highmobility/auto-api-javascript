import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Capabilities extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 16,
  };
  static readonly Name = 'capabilities';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Capabilities.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
