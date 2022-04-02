import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'estimated_range',
  value: Length,
})
export class EstimatedRange extends Property<typeof Length> {}
