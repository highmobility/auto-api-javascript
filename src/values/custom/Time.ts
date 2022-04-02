import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { UInteger } from '../base/UInteger';

@Size(1)
export class TimeHour extends UInteger {}

@Size(1)
export class TimeMinute extends UInteger {}

const TimeDescriptor = {
  items: {
    hour: TimeHour,
    minute: TimeMinute,
  },
  order: ['hour', 'minute'],
  size: 2,
};

@Descriptor(TimeDescriptor)
export class Time extends CustomType<typeof TimeDescriptor.items> {}
