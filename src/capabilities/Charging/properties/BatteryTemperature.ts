import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Temperature } from '../../../values/units';

@Descriptor({
  id: 20,
  name: 'battery_temperature',
  value: Temperature,
})
export class BatteryTemperature extends Property<typeof Temperature> {}
