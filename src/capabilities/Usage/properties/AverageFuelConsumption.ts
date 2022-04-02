import { Descriptor } from '../../../decorators';
import { FuelEfficiency } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 14,
  name: 'average_fuel_consumption',
  value: FuelEfficiency,
})
export class AverageFuelConsumption extends Property<typeof FuelEfficiency> {}
