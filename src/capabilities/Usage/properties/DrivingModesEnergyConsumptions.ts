import { Descriptor } from '../../../decorators';
import { DrivingModeEnergyConsumption } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 6,
  multiple: true,
  name: 'driving_modes_energy_consumptions',
  value: DrivingModeEnergyConsumption,
})
export class DrivingModesEnergyConsumptions extends Property<typeof DrivingModeEnergyConsumption> {}
