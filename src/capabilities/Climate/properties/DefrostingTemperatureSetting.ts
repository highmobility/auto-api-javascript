import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Temperature } from '../../../values/units';

@Descriptor({
  id: 9,
  name: 'defrosting_temperature_setting',
  value: Temperature,
})
export class DefrostingTemperatureSetting extends Property<typeof Temperature> {}
