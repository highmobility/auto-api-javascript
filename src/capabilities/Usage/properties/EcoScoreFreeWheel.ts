import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 37,
  name: 'eco_score_free_wheel',
  value: Percentage,
})
export class EcoScoreFreeWheel extends Property<typeof Percentage> {}
