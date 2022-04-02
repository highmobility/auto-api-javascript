import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 17,
  name: 'distance_to_next_oil_service',
  value: Length,
})
export class DistanceToNextOilService extends Property<typeof Length> {}
