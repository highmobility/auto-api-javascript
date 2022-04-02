import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 7,
  name: 'precision',
  value: Length,
})
export class Precision extends Property<typeof Length> {}
