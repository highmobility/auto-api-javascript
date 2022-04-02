import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { Enum } from '../base/Enum';
import { Timestamp } from '../base/Timestamp';

@Size(8)
export class TimerDate extends Timestamp {}

const TimerTimerTypeDescriptor = {
  values: {
    departure_date: 2,
    preferred_end_time: 1,
    preferred_start_time: 0,
  },
  size: 1,
};

@Descriptor(TimerTimerTypeDescriptor)
export class TimerTimerType extends Enum<keyof typeof TimerTimerTypeDescriptor.values> {}

const TimerDescriptor = {
  items: {
    date: TimerDate,
    timer_type: TimerTimerType,
  },
  order: ['timer_type', 'date'],
  size: 9,
};

@Descriptor(TimerDescriptor)
export class Timer extends CustomType<typeof TimerDescriptor.items> {}
