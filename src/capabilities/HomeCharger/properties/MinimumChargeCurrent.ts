import { Descriptor } from '../../../decorators';
import { ElectricCurrent } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 16,
  name: 'minimum_charge_current',
  value: ElectricCurrent,
})
export class MinimumChargeCurrent extends Property<typeof ElectricCurrent> {}
