import { Descriptor } from '../../../decorators';
import { ElectricCurrent } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 25,
  name: 'battery_current',
  value: ElectricCurrent,
})
export class BatteryCurrent extends Property<typeof ElectricCurrent> {}
