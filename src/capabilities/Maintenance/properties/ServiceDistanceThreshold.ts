import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 6,
  name: 'service_distance_threshold',
  value: Length,
})
export class ServiceDistanceThreshold extends Property<typeof Length> {}
