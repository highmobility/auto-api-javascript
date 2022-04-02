import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Status } from './properties/Status';

enum Properties {
  Status = 'status',
}

const WakeUpDescriptor = {
  category: 'digital_key',
  identifier: [0, 34],
  name: 'wake_up',
  prettyName: 'Wake Up',
  properties: {
    status: Status,
  },
  state: [],
};

@Descriptor(WakeUpDescriptor)
export class WakeUp extends Capability<typeof WakeUpDescriptor.properties> {
  public static Name = WakeUpDescriptor.name;
  public static Properties = Properties;
}
