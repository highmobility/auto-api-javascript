import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const WindowLocationDescriptor = {
  values: {
    front_left: 0,
    front_right: 1,
    hatch: 4,
    rear_left: 3,
    rear_right: 2,
  },
  size: 1,
};

@Descriptor(WindowLocationDescriptor)
export class WindowLocation extends Enum<keyof typeof WindowLocationDescriptor.values> {}
