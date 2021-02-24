import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Usage extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 104,
  };
  static readonly Name = 'usage';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Usage.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
