import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'displayed_state_of_charge',
  value: Percentage,
})
export class DisplayedStateOfCharge extends Property<typeof Percentage> {}
