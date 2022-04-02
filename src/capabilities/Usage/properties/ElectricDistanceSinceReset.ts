import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 25,
  name: 'electric_distance_since_reset',
  value: Length,
})
export class ElectricDistanceSinceReset extends Property<typeof Length> {}
