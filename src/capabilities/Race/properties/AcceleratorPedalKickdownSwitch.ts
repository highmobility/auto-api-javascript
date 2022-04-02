import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 17,
  name: 'accelerator_pedal_kickdown_switch',
  value: ActiveState,
})
export class AcceleratorPedalKickdownSwitch extends Property<typeof ActiveState> {}
