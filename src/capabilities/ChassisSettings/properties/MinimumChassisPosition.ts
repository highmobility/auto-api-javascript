import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 10,
  name: 'minimum_chassis_position',
  value: Length,
})
export class MinimumChassisPosition extends Property<typeof Length> {}
