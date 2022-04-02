import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 15,
  name: 'time_to_exhaust_inspection',
  value: Duration,
})
export class TimeToExhaustInspection extends Property<typeof Duration> {}
