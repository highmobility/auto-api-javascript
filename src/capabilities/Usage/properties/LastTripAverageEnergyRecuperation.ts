import { Descriptor } from '../../../decorators';
import { EnergyEfficiency } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 11,
  name: 'last_trip_average_energy_recuperation',
  value: EnergyEfficiency,
})
export class LastTripAverageEnergyRecuperation extends Property<typeof EnergyEfficiency> {}
