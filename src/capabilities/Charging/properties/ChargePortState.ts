import { Descriptor } from '../../../decorators';
import { Position } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 11,
  name: 'charge_port_state',
  value: Position,
})
export class ChargePortState extends Property<typeof Position> {}
