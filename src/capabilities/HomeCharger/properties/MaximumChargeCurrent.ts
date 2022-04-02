import { Descriptor } from '../../../decorators';
import { ElectricCurrent } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 15,
  name: 'maximum_charge_current',
  value: ElectricCurrent,
})
export class MaximumChargeCurrent extends Property<typeof ElectricCurrent> {}
