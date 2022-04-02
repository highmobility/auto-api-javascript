import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  name: 'dimming',
  value: Percentage,
})
export class Dimming extends Property<typeof Percentage> {}
