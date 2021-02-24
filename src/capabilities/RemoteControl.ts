import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class RemoteControl extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 39,
  };
  static readonly Name = 'remote_control';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(RemoteControl.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
