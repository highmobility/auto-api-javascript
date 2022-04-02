import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'position',
  value: Percentage,
})
export class Position extends Property<typeof Percentage> {}
