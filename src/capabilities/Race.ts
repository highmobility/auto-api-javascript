import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Race extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 87,
  };
  static readonly Name = 'race';
  constructor() {
    super(Configuration.getCapabilityDefinition(Race.Name), Configuration.getUniversalProperties());
  }
}
