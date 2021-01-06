import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Windows extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 69,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('windows'),
      Configuration.getUniversalProperties(),
    );
  }
}
