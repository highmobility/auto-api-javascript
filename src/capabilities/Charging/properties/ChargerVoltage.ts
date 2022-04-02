import { Descriptor } from '../../../decorators';
import { ElectricPotentialDifference } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 26,
  name: 'charger_voltage',
  value: ElectricPotentialDifference,
})
export class ChargerVoltage extends Property<typeof ElectricPotentialDifference> {}
