import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 12,
  name: 'adblue_level',
  value: Percentage,
})
export class AdblueLevel extends Property<typeof Percentage> {}
