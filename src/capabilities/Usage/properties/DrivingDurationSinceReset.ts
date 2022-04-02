import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 35,
  name: 'driving_duration_since_reset',
  value: Duration,
})
export class DrivingDurationSinceReset extends Property<typeof Duration> {}
