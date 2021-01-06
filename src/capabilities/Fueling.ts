import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Fueling extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 64,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('fueling'),
      Configuration.getUniversalProperties(),
    );
  }
}
