import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const AxleDescriptor = {
  values: {
    front: 0,
    rear: 1,
  },
  size: 1,
};

@Descriptor(AxleDescriptor)
export class Axle extends Enum<keyof typeof AxleDescriptor.values> {}
