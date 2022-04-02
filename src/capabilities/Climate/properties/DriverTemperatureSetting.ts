import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Temperature } from '../../../values/units';

@Descriptor({
  id: 3,
  name: 'driver_temperature_setting',
  value: Temperature,
})
export class DriverTemperatureSetting extends Property<typeof Temperature> {}
