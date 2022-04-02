import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Status } from './properties/Status';

enum Properties {
  Status = 'status',
}

const ParkingBrakeDescriptor = {
  category: 'parking',
  identifier: [0, 88],
  name: 'parking_brake',
  prettyName: 'Parking Brake',
  properties: {
    status: Status,
  },
  state: [Status],
};

@Descriptor(ParkingBrakeDescriptor)
export class ParkingBrake extends Capability<typeof ParkingBrakeDescriptor.properties> {
  public static Name = ParkingBrakeDescriptor.name;
  public static Properties = Properties;
}
