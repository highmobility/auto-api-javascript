import { Descriptor } from '../../../decorators';
import { Position } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 3,
  name: 'gas_flap_position',
  value: Position,
})
export class GasFlapPosition extends Property<typeof Position> {}
