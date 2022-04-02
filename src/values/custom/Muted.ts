import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const MutedDescriptor = {
  values: {
    muted: 1,
    not_muted: 0,
  },
  size: 1,
};

@Descriptor(MutedDescriptor)
export class Muted extends Enum<keyof typeof MutedDescriptor.values> {}
