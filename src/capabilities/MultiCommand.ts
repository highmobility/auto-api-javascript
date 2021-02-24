import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class MultiCommand extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 19,
  };
  static readonly Name = 'multi_command';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(MultiCommand.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
