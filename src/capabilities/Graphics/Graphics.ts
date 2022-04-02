import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { ImageUrl } from './properties/ImageUrl';

enum Properties {
  ImageUrl = 'image_url',
}

const GraphicsDescriptor = {
  category: 'headunit',
  identifier: [0, 81],
  name: 'graphics',
  prettyName: 'Graphics',
  properties: {
    image_url: ImageUrl,
  },
  state: [],
};

@Descriptor(GraphicsDescriptor)
export class Graphics extends Capability<typeof GraphicsDescriptor.properties> {
  public static Name = GraphicsDescriptor.name;
  public static Properties = Properties;
}
