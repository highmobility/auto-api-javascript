import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Adas extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 108,
  };
  static readonly Name = 'adas';
  constructor() {
    super(Configuration.getCapabilityDefinition(Adas.Name), Configuration.getUniversalProperties());
  }
}
