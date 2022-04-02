import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Speed } from '../../../values/units';

@Descriptor({
  id: 21,
  name: 'maximum_speed',
  value: Speed,
})
export class MaximumSpeed extends Property<typeof Speed> {}
