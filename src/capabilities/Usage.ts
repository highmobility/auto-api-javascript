import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Usage extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 104,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('usage'),
      Configuration.getUniversalProperties(),
    );
  }
}
