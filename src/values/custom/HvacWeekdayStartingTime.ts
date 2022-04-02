import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';

import { Time, Weekday } from './';

const HvacWeekdayStartingTimeDescriptor = {
  items: {
    time: Time,
    weekday: Weekday,
  },
  order: ['weekday', 'time'],
  size: 3,
};

@Descriptor(HvacWeekdayStartingTimeDescriptor)
export class HvacWeekdayStartingTime extends CustomType<
  typeof HvacWeekdayStartingTimeDescriptor.items
> {}
