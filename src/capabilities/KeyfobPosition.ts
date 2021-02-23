import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class KeyfobPosition extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 72,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('keyfob_position'),
      Configuration.getUniversalProperties(),
    );
  }
}
