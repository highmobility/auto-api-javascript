import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 27,
  name: 'electric_duration_since_reset',
  value: Duration,
})
export class ElectricDurationSinceReset extends Property<typeof Duration> {}
