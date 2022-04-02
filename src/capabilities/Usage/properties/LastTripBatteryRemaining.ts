import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 12,
  name: 'last_trip_battery_remaining',
  value: Percentage,
})
export class LastTripBatteryRemaining extends Property<typeof Percentage> {}
