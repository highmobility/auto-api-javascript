import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 32,
  name: 'fuel_distance_last_trip',
  value: Length,
})
export class FuelDistanceLastTrip extends Property<typeof Length> {}
