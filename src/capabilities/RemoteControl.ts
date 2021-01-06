import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class RemoteControl extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 39,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('remote_control'),
      Configuration.getUniversalProperties(),
    );
  }
}
