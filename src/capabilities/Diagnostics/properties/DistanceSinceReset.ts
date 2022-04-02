import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 13,
  name: 'distance_since_reset',
  value: Length,
})
export class DistanceSinceReset extends Property<typeof Length> {}
