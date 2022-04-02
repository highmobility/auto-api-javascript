import { Descriptor } from '../../../decorators';
import { EnergyEfficiency } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 23,
  name: 'electric_consumption_rate_since_reset',
  value: EnergyEfficiency,
})
export class ElectricConsumptionRateSinceReset extends Property<typeof EnergyEfficiency> {}
