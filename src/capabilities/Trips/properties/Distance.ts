import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 13,
  name: 'distance',
  value: Length,
})
export class Distance extends Property<typeof Length> {}
