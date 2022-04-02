import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'understeering',
  value: Percentage,
})
export class Understeering extends Property<typeof Percentage> {}
