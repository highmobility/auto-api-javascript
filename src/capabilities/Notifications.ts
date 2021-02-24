import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Notifications extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 56,
  };
  static readonly Name = 'notifications';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Notifications.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
