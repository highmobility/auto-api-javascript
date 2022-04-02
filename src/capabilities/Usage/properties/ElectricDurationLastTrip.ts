import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 26,
  name: 'electric_duration_last_trip',
  value: Duration,
})
export class ElectricDurationLastTrip extends Property<typeof Duration> {}
