import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 13,
  name: 'brake_pedal_position',
  value: Percentage,
})
export class BrakePedalPosition extends Property<typeof Percentage> {}
