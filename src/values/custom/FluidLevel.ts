import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const FluidLevelDescriptor = {
  values: {
    filled: 1,
    high: 4,
    low: 0,
    normal: 3,
    very_high: 5,
    very_low: 2,
  },
  size: 1,
};

@Descriptor(FluidLevelDescriptor)
export class FluidLevel extends Enum<keyof typeof FluidLevelDescriptor.values> {}
