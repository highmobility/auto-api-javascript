import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 36,
  name: 'eco_score_total',
  value: Percentage,
})
export class EcoScoreTotal extends Property<typeof Percentage> {}
