import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Status } from './properties/Status';

enum Properties {
  Status = 'status',
}

const ValetModeDescriptor = {
  category: 'parking',
  identifier: [0, 40],
  name: 'valet_mode',
  prettyName: 'Valet Mode',
  properties: {
    status: Status,
  },
  state: [Status],
};

@Descriptor(ValetModeDescriptor)
export class ValetMode extends Capability<typeof ValetModeDescriptor.properties> {
  public static Name = ValetModeDescriptor.name;
  public static Properties = Properties;
}
