import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Location } from './properties/Location';

enum Properties {
  Location = 'location',
}

const KeyfobPositionDescriptor = {
  category: 'chassis',
  identifier: [0, 72],
  name: 'keyfob_position',
  prettyName: 'Keyfob Position',
  properties: {
    location: Location,
  },
  state: [Location],
};

@Descriptor(KeyfobPositionDescriptor)
export class KeyfobPosition extends Capability<typeof KeyfobPositionDescriptor.properties> {
  public static Name = KeyfobPositionDescriptor.name;
  public static Properties = Properties;
}
