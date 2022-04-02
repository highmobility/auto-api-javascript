import { Descriptor } from '../../../decorators';
import { DistanceOverTime as DistanceOverTimeCustomType } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 21,
  name: 'distance_over_time',
  value: DistanceOverTimeCustomType,
})
export class DistanceOverTime extends Property<typeof DistanceOverTimeCustomType> {}
