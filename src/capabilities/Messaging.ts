import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Messaging extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 55,
  };
  static readonly Name = 'messaging';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Messaging.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
