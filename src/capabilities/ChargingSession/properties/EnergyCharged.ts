import { Descriptor } from '../../../decorators';
import { Energy } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 10,
  name: 'energy_charged',
  value: Energy,
})
export class EnergyCharged extends Property<typeof Energy> {}
