import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 3,
  name: 'oversteering',
  value: Percentage,
})
export class Oversteering extends Property<typeof Percentage> {}
