import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class MultiCommand extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 19,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('multi_command'),
      Configuration.getUniversalProperties(),
    );
  }
}
