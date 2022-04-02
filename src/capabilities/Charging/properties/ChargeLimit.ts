import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 8,
  name: 'charge_limit',
  value: Percentage,
})
export class ChargeLimit extends Property<typeof Percentage> {}
