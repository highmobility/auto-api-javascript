import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Duration, Length } from '../units';

const DistanceOverTimeDescriptor = {
  items: {
    distance: Length,
    time: Duration,
  },
  order: ['distance', 'time'],
  size: 20,
};

@Descriptor(DistanceOverTimeDescriptor)
export class DistanceOverTime extends CustomType<typeof DistanceOverTimeDescriptor.items> {}
