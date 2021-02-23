import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Graphics extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 81,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('graphics'),
      Configuration.getUniversalProperties(),
    );
  }
}
