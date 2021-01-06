import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Browser extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 73,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('browser'),
      Configuration.getUniversalProperties(),
    );
  }
}
