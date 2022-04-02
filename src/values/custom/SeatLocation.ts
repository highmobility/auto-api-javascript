import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const SeatLocationDescriptor = {
  values: {
    front_left: 0,
    front_right: 1,
    rear_center: 4,
    rear_left: 3,
    rear_right: 2,
  },
  size: 1,
};

@Descriptor(SeatLocationDescriptor)
export class SeatLocation extends Enum<keyof typeof SeatLocationDescriptor.values> {}
