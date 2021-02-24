import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Climate extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 36,
  };
  static readonly Name = 'climate';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Climate.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
