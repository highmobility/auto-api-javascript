import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class WakeUp extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 34,
  };
  static readonly Name = 'wake_up';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(WakeUp.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
