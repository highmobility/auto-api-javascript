import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 14,
  name: 'brake_pedal_switch',
  value: ActiveState,
})
export class BrakePedalSwitch extends Property<typeof ActiveState> {}
