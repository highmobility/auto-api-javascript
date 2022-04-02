import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Temperature } from '../../../values/units';

@Descriptor({
  id: 4,
  name: 'passenger_temperature_setting',
  value: Temperature,
})
export class PassengerTemperatureSetting extends Property<typeof Temperature> {}
