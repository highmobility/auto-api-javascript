import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Temperature } from '../../../values/units';

@Descriptor({
  id: 1,
  name: 'inside_temperature',
  value: Temperature,
})
export class InsideTemperature extends Property<typeof Temperature> {}
