import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const SpeedDescriptor = {
  size: 10,
  units: {
    meters_per_second: 0,
    kilometers_per_hour: 1,
    miles_per_hour: 2,
    knots: 3,
  },
};

@Descriptor(SpeedDescriptor)
export class Speed extends UnitType<keyof typeof SpeedDescriptor.units> {}
