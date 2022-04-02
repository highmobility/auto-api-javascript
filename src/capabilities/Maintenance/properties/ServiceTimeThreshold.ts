import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 7,
  name: 'service_time_threshold',
  value: Duration,
})
export class ServiceTimeThreshold extends Property<typeof Duration> {}
