import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 34,
  name: 'driving_duration_last_trip',
  value: Duration,
})
export class DrivingDurationLastTrip extends Property<typeof Duration> {}
