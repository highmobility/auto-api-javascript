import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Engine extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 105,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('engine'),
      Configuration.getUniversalProperties(),
    );
  }
}
