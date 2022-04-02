import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 16,
  name: 'odometer_after_last_trip',
  value: Length,
})
export class OdometerAfterLastTrip extends Property<typeof Length> {}
