import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 31,
  name: 'battery_level_at_departure',
  value: Percentage,
})
export class BatteryLevelAtDeparture extends Property<typeof Percentage> {}
