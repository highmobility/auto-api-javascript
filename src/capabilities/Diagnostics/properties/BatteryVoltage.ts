import { Descriptor } from '../../../decorators';
import { ElectricPotentialDifference } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 11,
  name: 'battery_voltage',
  value: ElectricPotentialDifference,
})
export class BatteryVoltage extends Property<typeof ElectricPotentialDifference> {}
