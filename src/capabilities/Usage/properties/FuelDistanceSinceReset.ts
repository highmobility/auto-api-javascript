import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 33,
  name: 'fuel_distance_since_reset',
  value: Length,
})
export class FuelDistanceSinceReset extends Property<typeof Length> {}
