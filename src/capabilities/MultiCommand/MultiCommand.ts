import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { MultiCommands } from './properties/MultiCommands';
import { MultiStates } from './properties/MultiStates';

enum Properties {
  MultiCommands = 'multi_commands',
  MultiStates = 'multi_states',
}

const MultiCommandDescriptor = {
  category: 'api_structure',
  identifier: [0, 19],
  name: 'multi_command',
  prettyName: 'Multi Command',
  properties: {
    multi_commands: MultiCommands,
    multi_states: MultiStates,
  },
  state: [MultiStates],
};

@Descriptor(MultiCommandDescriptor)
export class MultiCommand extends Capability<typeof MultiCommandDescriptor.properties> {
  public static Name = MultiCommandDescriptor.name;
  public static Properties = Properties;
}
