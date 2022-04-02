import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const LocationDescriptor = {
  values: {
    front_left: 0,
    front_right: 1,
    rear_left: 3,
    rear_right: 2,
  },
  size: 1,
};

@Descriptor(LocationDescriptor)
export class Location extends Enum<keyof typeof LocationDescriptor.values> {}
