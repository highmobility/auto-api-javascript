import { Descriptor } from '../../../decorators';
import { FuelEfficiency } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 29,
  name: 'fuel_consumption_rate_since_reset',
  value: FuelEfficiency,
})
export class FuelConsumptionRateSinceReset extends Property<typeof FuelEfficiency> {}
