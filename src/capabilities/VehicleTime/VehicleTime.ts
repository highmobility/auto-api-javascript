import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { VehicleTime as VehicleTimeProperty } from './properties/VehicleTime';

enum Properties {
  VehicleTimeProperty = 'vehicle_time',
}

const VehicleTimeDescriptor = {
  category: 'poi',
  identifier: [0, 80],
  name: 'vehicle_time',
  prettyName: 'Vehicle Time',
  properties: {
    vehicle_time: VehicleTimeProperty,
  },
  state: [VehicleTimeProperty],
};

@Descriptor(VehicleTimeDescriptor)
export class VehicleTime extends Capability<typeof VehicleTimeDescriptor.properties> {
  public static Name = VehicleTimeDescriptor.name;
  public static Properties = Properties;
}
