import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { States } from './properties/States';

enum Properties {
  States = 'states',
}

const VehicleStatusDescriptor = {
  category: 'api_structure',
  identifier: [0, 17],
  name: 'vehicle_status',
  prettyName: 'Vehicle Status',
  properties: {
    states: States,
  },
  state: [States],
};

@Descriptor(VehicleStatusDescriptor)
export class VehicleStatus extends Capability<typeof VehicleStatusDescriptor.properties> {
  public static Name = VehicleStatusDescriptor.name;
  public static Properties = Properties;
}
