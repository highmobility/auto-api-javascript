import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { State } from './properties/State';

enum Properties {
  State = 'state',
}

const IgnitionDescriptor = {
  category: 'digital_key',
  identifier: [0, 53],
  name: 'ignition',
  prettyName: 'Ignition',
  properties: {
    state: State,
  },
  state: [State],
};

@Descriptor(IgnitionDescriptor)
export class Ignition extends Capability<typeof IgnitionDescriptor.properties> {
  public static Name = IgnitionDescriptor.name;
  public static Properties = Properties;
}
