import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 18,
  name: 'time_to_next_oil_service',
  value: Duration,
})
export class TimeToNextOilService extends Property<typeof Duration> {}
