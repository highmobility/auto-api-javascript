import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 14,
  name: 'distance_since_start',
  value: Length,
})
export class DistanceSinceStart extends Property<typeof Length> {}
