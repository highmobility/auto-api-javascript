import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  MultiCommands = 'multi_commands',
  MultiStates = 'multi_states',
}

export class MultiCommand extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 19,
  };
  static readonly Name = 'multi_command';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(MultiCommand.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
