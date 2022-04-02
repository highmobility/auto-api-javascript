import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Capabilities as CapabilitiesProperty } from './properties/Capabilities';
import { Webhooks } from './properties/Webhooks';

enum Properties {
  CapabilitiesProperty = 'capabilities',
  Webhooks = 'webhooks',
}

const CapabilitiesDescriptor = {
  category: 'api_structure',
  identifier: [0, 16],
  name: 'capabilities',
  prettyName: 'Capabilities',
  properties: {
    capabilities: CapabilitiesProperty,
    webhooks: Webhooks,
  },
  state: [CapabilitiesProperty, Webhooks],
};

@Descriptor(CapabilitiesDescriptor)
export class Capabilities extends Capability<typeof CapabilitiesDescriptor.properties> {
  public static Name = CapabilitiesDescriptor.name;
  public static Properties = Properties;
}
