import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 9,
  name: 'maximum_chassis_position',
  value: Length,
})
export class MaximumChassisPosition extends Property<typeof Length> {}
