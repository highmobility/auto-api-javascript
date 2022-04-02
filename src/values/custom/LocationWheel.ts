import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const LocationWheelDescriptor = {
  values: {
    front_left: 0,
    front_right: 1,
    rear_left: 3,
    rear_left_outer: 5,
    rear_right: 2,
    rear_right_outer: 4,
    spare: 6,
  },
  size: 1,
};

@Descriptor(LocationWheelDescriptor)
export class LocationWheel extends Enum<keyof typeof LocationWheelDescriptor.values> {}
