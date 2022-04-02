import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const FrequencyDescriptor = {
  size: 10,
  units: {
    hertz: 0,
    millihertz: 1,
    kilohertz: 3,
    megahertz: 4,
    gigahertz: 5,
    times_per_minute: 8,
    times_per_hour: 9,
    times_per_day: 10,
  },
};

@Descriptor(FrequencyDescriptor)
export class Frequency extends UnitType<keyof typeof FrequencyDescriptor.units> {}
