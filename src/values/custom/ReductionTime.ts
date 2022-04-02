import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';

import { StartStop, Time } from './';

const ReductionTimeDescriptor = {
  items: {
    start_stop: StartStop,
    time: Time,
  },
  order: ['start_stop', 'time'],
  size: 3,
};

@Descriptor(ReductionTimeDescriptor)
export class ReductionTime extends CustomType<typeof ReductionTimeDescriptor.items> {}
