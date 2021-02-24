import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class KeyfobPosition extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 72,
  };
  static readonly Name = 'keyfob_position';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(KeyfobPosition.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
