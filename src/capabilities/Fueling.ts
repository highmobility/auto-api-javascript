import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Fueling extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 64,
  };
  static readonly Name = 'fueling';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Fueling.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
