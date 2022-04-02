import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 39,
  name: 'eco_score_bonus_range',
  value: Length,
})
export class EcoScoreBonusRange extends Property<typeof Length> {}
