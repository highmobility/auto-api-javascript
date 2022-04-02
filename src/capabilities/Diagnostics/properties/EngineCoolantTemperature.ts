import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Temperature } from '../../../values/units';

@Descriptor({
  id: 17,
  name: 'engine_coolant_temperature',
  value: Temperature,
})
export class EngineCoolantTemperature extends Property<typeof Temperature> {}
