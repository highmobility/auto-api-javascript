import { Descriptor } from '../../../decorators';
import { ElectricCurrent } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 14,
  name: 'max_charging_current',
  value: ElectricCurrent,
})
export class MaxChargingCurrent extends Property<typeof ElectricCurrent> {}
