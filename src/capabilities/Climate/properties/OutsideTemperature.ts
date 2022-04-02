import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Temperature } from '../../../values/units';

@Descriptor({
  id: 2,
  name: 'outside_temperature',
  value: Temperature,
})
export class OutsideTemperature extends Property<typeof Temperature> {}
