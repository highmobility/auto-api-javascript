import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Temperature } from '../../../values/units';

@Descriptor({
  id: 12,
  name: 'rear_temperature_setting',
  value: Temperature,
})
export class RearTemperatureSetting extends Property<typeof Temperature> {}
