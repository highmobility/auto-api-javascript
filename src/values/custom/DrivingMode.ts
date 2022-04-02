import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const DrivingModeDescriptor = {
  values: {
    comfort: 5,
    eco: 1,
    ecoPlus: 4,
    regular: 0,
    sport: 2,
    sport_plus: 3,
  },
  size: 1,
};

@Descriptor(DrivingModeDescriptor)
export class DrivingMode extends Enum<keyof typeof DrivingModeDescriptor.values> {}
