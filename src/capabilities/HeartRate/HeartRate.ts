import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { HeartRate as HeartRateProperty } from './properties/HeartRate';

enum Properties {
  HeartRateProperty = 'heart_rate',
}

const HeartRateDescriptor = {
  category: 'health',
  identifier: [0, 41],
  name: 'heart_rate',
  prettyName: 'Heart Rate',
  properties: {
    heart_rate: HeartRateProperty,
  },
  state: [],
};

@Descriptor(HeartRateDescriptor)
export class HeartRate extends Capability<typeof HeartRateDescriptor.properties> {
  public static Name = HeartRateDescriptor.name;
  public static Properties = Properties;
}
