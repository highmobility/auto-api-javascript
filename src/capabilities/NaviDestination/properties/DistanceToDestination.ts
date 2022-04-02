import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 6,
  name: 'distance_to_destination',
  value: Length,
})
export class DistanceToDestination extends Property<typeof Length> {}
