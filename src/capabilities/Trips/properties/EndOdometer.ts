import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 11,
  name: 'end_odometer',
  value: Length,
})
export class EndOdometer extends Property<typeof Length> {}
