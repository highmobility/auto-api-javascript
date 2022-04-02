import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const WeekdayDescriptor = {
  values: {
    automatic: 7,
    friday: 4,
    monday: 0,
    saturday: 5,
    sunday: 6,
    thursday: 3,
    tuesday: 1,
    wednesday: 2,
  },
  size: 1,
};

@Descriptor(WeekdayDescriptor)
export class Weekday extends Enum<keyof typeof WeekdayDescriptor.values> {}
