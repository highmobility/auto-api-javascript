import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 3,
  name: 'acceleration_evaluation',
  value: Percentage,
})
export class AccelerationEvaluation extends Property<typeof Percentage> {}
