import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 10,
  name: 'start_odometer',
  value: Length,
})
export class StartOdometer extends Property<typeof Length> {}
