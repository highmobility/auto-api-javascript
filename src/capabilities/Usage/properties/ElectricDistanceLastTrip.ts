import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 24,
  name: 'electric_distance_last_trip',
  value: Length,
})
export class ElectricDistanceLastTrip extends Property<typeof Length> {}
