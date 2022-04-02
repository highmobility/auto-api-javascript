import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 4,
  name: 'starting_time',
  value: Duration,
})
export class StartingTime extends Property<typeof Duration> {}
