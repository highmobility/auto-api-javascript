import { Descriptor } from '../../../decorators';
import { Energy } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 36,
  name: 'battery_capacity',
  value: Energy,
})
export class BatteryCapacity extends Property<typeof Energy> {}
