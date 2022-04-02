import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const ActiveStateDescriptor = {
  values: {
    active: 1,
    inactive: 0,
  },
  size: 1,
};

@Descriptor(ActiveStateDescriptor)
export class ActiveState extends Enum<keyof typeof ActiveStateDescriptor.values> {
  public activate() {
    this.setValue('active');
    return this;
  }
  public deactivate() {
    this.setValue('inactive');
    return this;
  }
}
