import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 9,
  name: 'time_to_complete_charge',
  value: Duration,
})
export class TimeToCompleteCharge extends Property<typeof Duration> {}
