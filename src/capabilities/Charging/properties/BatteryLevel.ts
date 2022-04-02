import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 3,
  name: 'battery_level',
  value: Percentage,
})
export class BatteryLevel extends Property<typeof Percentage> {}
