import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 32,
  name: 'engine_total_operating_time',
  value: Duration,
})
export class EngineTotalOperatingTime extends Property<typeof Duration> {}
