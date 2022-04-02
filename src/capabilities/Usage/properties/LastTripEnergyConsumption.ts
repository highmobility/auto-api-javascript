import { Descriptor } from '../../../decorators';
import { Energy } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 7,
  name: 'last_trip_energy_consumption',
  value: Energy,
})
export class LastTripEnergyConsumption extends Property<typeof Energy> {}
