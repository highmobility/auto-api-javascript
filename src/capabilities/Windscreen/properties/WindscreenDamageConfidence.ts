import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 7,
  name: 'windscreen_damage_confidence',
  value: Percentage,
})
export class WindscreenDamageConfidence extends Property<typeof Percentage> {}
