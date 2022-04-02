import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const LockSafetyDescriptor = {
  values: {
    safe: 0,
    unsafe: 1,
  },
  size: 1,
};

@Descriptor(LockSafetyDescriptor)
export class LockSafety extends Enum<keyof typeof LockSafetyDescriptor.values> {}
