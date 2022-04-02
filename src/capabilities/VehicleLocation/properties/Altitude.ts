import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 6,
  name: 'altitude',
  value: Length,
})
export class Altitude extends Property<typeof Length> {}
