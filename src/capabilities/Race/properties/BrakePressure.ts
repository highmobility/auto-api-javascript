import { Descriptor } from '../../../decorators';
import { Pressure } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 6,
  name: 'brake_pressure',
  value: Pressure,
})
export class BrakePressure extends Property<typeof Pressure> {}
