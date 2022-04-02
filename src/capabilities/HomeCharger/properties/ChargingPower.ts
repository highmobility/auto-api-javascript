import { Descriptor } from '../../../decorators';
import { Power } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 19,
  name: 'charging_power',
  value: Power,
})
export class ChargingPower extends Property<typeof Power> {}
