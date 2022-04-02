import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 15,
  name: 'clutch_pedal_switch',
  value: ActiveState,
})
export class ClutchPedalSwitch extends Property<typeof ActiveState> {}
