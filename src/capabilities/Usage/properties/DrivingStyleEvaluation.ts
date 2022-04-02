import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 4,
  name: 'driving_style_evaluation',
  value: Percentage,
})
export class DrivingStyleEvaluation extends Property<typeof Percentage> {}
