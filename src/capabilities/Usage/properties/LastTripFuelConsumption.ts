import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Volume } from '../../../values/units';

@Descriptor({
  id: 8,
  name: 'last_trip_fuel_consumption',
  value: Volume,
})
export class LastTripFuelConsumption extends Property<typeof Volume> {}
