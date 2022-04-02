import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Handle } from './properties/Handle';
import { Text } from './properties/Text';

enum Properties {
  Handle = 'handle',
  Text = 'text',
}

const MessagingDescriptor = {
  category: 'headunit',
  identifier: [0, 55],
  name: 'messaging',
  prettyName: 'Messaging',
  properties: {
    handle: Handle,
    text: Text,
  },
  state: [Handle, Text],
};

@Descriptor(MessagingDescriptor)
export class Messaging extends Capability<typeof MessagingDescriptor.properties> {
  public static Name = MessagingDescriptor.name;
  public static Properties = Properties;
}
