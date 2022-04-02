import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 5,
  name: 'arrival_duration',
  value: Duration,
})
export class ArrivalDuration extends Property<typeof Duration> {}
