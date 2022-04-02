import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 38,
  name: 'eco_score_constant',
  value: Percentage,
})
export class EcoScoreConstant extends Property<typeof Percentage> {}
