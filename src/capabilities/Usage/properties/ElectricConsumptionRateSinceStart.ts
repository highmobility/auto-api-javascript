import { Descriptor } from '../../../decorators';
import { EnergyEfficiency } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 22,
  name: 'electric_consumption_rate_since_start',
  value: EnergyEfficiency,
})
export class ElectricConsumptionRateSinceStart extends Property<typeof EnergyEfficiency> {}
