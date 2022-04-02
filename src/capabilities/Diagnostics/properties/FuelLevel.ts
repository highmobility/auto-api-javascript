import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 5,
  name: 'fuel_level',
  value: Percentage,
})
export class FuelLevel extends Property<typeof Percentage> {}
