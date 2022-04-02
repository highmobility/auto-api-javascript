import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 14,
  name: 'distance_to_next_service',
  value: Length,
})
export class DistanceToNextService extends Property<typeof Length> {}
