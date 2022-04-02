import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 28,
  name: 'max_range',
  value: Length,
})
export class MaxRange extends Property<typeof Length> {}
