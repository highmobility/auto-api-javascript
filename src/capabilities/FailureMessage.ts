import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class FailureMessage extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 2,
  };
  static readonly Name = 'failure_message';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(FailureMessage.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
