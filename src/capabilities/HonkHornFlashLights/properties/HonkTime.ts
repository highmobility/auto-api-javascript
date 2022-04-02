import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 5,
  name: 'honk_time',
  value: Duration,
})
export class HonkTime extends Property<typeof Duration> {}
