import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 4,
  name: 'gas_pedal_position',
  value: Percentage,
})
export class GasPedalPosition extends Property<typeof Percentage> {}
