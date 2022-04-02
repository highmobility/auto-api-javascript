import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 13,
  name: 'time_to_next_service',
  value: Duration,
})
export class TimeToNextService extends Property<typeof Duration> {}
