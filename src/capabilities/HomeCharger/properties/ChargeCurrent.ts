import { Descriptor } from '../../../decorators';
import { ElectricCurrent } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 14,
  name: 'charge_current',
  value: ElectricCurrent,
})
export class ChargeCurrent extends Property<typeof ElectricCurrent> {}
