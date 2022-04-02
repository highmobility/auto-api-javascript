import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const ActiveSelectedStateDescriptor = {
  values: {
    active: 2,
    inactive_not_selected: 1,
    inactive_selected: 0,
  },
  size: 1,
};

@Descriptor(ActiveSelectedStateDescriptor)
export class ActiveSelectedState extends Enum<keyof typeof ActiveSelectedStateDescriptor.values> {}
