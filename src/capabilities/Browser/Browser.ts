import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Url } from './properties/Url';

enum Properties {
  Url = 'url',
}

const BrowserDescriptor = {
  category: 'headunit',
  identifier: [0, 73],
  name: 'browser',
  prettyName: 'Browser',
  properties: {
    url: Url,
  },
  state: [],
};

@Descriptor(BrowserDescriptor)
export class Browser extends Capability<typeof BrowserDescriptor.properties> {
  public static Name = BrowserDescriptor.name;
  public static Properties = Properties;
}
