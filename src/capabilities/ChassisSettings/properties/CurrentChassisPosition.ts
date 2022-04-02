import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 8,
  name: 'current_chassis_position',
  value: Length,
})
export class CurrentChassisPosition extends Property<typeof Length> {}
