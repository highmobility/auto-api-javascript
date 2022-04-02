import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 8,
  name: 'total_charging_duration',
  value: Duration,
})
export class TotalChargingDuration extends Property<typeof Duration> {}
