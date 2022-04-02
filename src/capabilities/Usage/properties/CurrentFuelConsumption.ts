import { Descriptor } from '../../../decorators';
import { FuelEfficiency } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 15,
  name: 'current_fuel_consumption',
  value: FuelEfficiency,
})
export class CurrentFuelConsumption extends Property<typeof FuelEfficiency> {}
