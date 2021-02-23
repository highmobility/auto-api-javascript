import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Messaging extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 55,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('messaging'),
      Configuration.getUniversalProperties(),
    );
  }
}
