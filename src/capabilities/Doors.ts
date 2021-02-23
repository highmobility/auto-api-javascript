import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Doors extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 32,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('doors'),
      Configuration.getUniversalProperties(),
    );
  }
}
