import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 42,
  name: 'engine_total_idle_operating_time',
  value: Duration,
})
export class EngineTotalIdleOperatingTime extends Property<typeof Duration> {}
