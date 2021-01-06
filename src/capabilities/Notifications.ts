import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Notifications extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 56,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('notifications'),
      Configuration.getUniversalProperties(),
    );
  }
}
