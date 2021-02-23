import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class FailureMessage extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 2,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('failure_message'),
      Configuration.getUniversalProperties(),
    );
  }
}
