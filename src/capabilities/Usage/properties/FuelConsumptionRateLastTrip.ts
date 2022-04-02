import { Descriptor } from '../../../decorators';
import { FuelEfficiency } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 28,
  name: 'fuel_consumption_rate_last_trip',
  value: FuelEfficiency,
})
export class FuelConsumptionRateLastTrip extends Property<typeof FuelEfficiency> {}
