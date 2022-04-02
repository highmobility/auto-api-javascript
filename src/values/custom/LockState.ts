import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const LockStateDescriptor = {
  values: {
    locked: 1,
    unlocked: 0,
  },
  size: 1,
};

@Descriptor(LockStateDescriptor)
export class LockState extends Enum<keyof typeof LockStateDescriptor.values> {
  public lock() {
    this.setValue('locked');
    return this;
  }
  public unlock() {
    this.setValue('unlocked');
    return this;
  }
}
