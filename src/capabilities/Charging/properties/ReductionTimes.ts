import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { ReductionTime } from '../../../values/custom';

@Descriptor({
  id: 19,
  multiple: true,
  name: 'reduction_times',
  value: ReductionTime,
})
export class ReductionTimes extends Property<typeof ReductionTime> {}
