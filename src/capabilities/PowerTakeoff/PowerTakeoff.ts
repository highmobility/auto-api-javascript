import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Engaged } from './properties/Engaged';
import { Status } from './properties/Status';

enum Properties {
  Engaged = 'engaged',
  Status = 'status',
}

const PowerTakeoffDescriptor = {
  category: 'heavy_duty',
  identifier: [0, 101],
  name: 'power_takeoff',
  prettyName: 'Power Take-Off',
  properties: {
    engaged: Engaged,
    status: Status,
  },
  state: [Engaged, Status],
};

@Descriptor(PowerTakeoffDescriptor)
export class PowerTakeoff extends Capability<typeof PowerTakeoffDescriptor.properties> {
  public static Name = PowerTakeoffDescriptor.name;
  public static Properties = Properties;
}
