import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 16,
  name: 'accelerator_pedal_idle_switch',
  value: ActiveState,
})
export class AcceleratorPedalIdleSwitch extends Property<typeof ActiveState> {}
