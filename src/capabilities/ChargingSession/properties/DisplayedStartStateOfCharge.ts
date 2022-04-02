import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 3,
  name: 'displayed_start_state_of_charge',
  value: Percentage,
})
export class DisplayedStartStateOfCharge extends Property<typeof Percentage> {}
