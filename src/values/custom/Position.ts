import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const PositionDescriptor = {
  values: {
    closed: 0,
    open: 1,
  },
  size: 1,
};

@Descriptor(PositionDescriptor)
export class Position extends Enum<keyof typeof PositionDescriptor.values> {
  public close() {
    this.setValue('closed');
    return this;
  }
}
