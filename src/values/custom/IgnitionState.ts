import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const IgnitionStateDescriptor = {
  values: {
    accessory: 2,
    lock: 0,
    off: 1,
    on: 3,
    start: 4,
  },
  size: 1,
};

@Descriptor(IgnitionStateDescriptor)
export class IgnitionState extends Enum<keyof typeof IgnitionStateDescriptor.values> {}
