import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Connection } from './properties/Connection';

enum Properties {
  Connection = 'connection',
}

const MobileDescriptor = {
  category: 'headunit',
  identifier: [0, 102],
  name: 'mobile',
  prettyName: 'Mobile',
  properties: {
    connection: Connection,
  },
  state: [Connection],
};

@Descriptor(MobileDescriptor)
export class Mobile extends Capability<typeof MobileDescriptor.properties> {
  public static Name = MobileDescriptor.name;
  public static Properties = Properties;
}
