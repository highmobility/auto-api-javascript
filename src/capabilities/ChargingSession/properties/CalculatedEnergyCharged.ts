import { Descriptor } from '../../../decorators';
import { Energy } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 9,
  name: 'calculated_energy_charged',
  value: Energy,
})
export class CalculatedEnergyCharged extends Property<typeof Energy> {}
