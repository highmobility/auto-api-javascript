import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 31,
  name: 'odometer',
  value: Length,
})
export class Odometer extends Property<typeof Length> {}
