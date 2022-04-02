import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Text } from './properties/Text';

enum Properties {
  Text = 'text',
}

const TextInputDescriptor = {
  category: 'headunit',
  identifier: [0, 68],
  name: 'text_input',
  prettyName: 'Text Input',
  properties: {
    text: Text,
  },
  state: [],
};

@Descriptor(TextInputDescriptor)
export class TextInput extends Capability<typeof TextInputDescriptor.properties> {
  public static Name = TextInputDescriptor.name;
  public static Properties = Properties;
}
