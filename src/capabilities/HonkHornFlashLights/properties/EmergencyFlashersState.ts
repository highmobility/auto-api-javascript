import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 4,
  name: 'emergency_flashers_state',
  value: ActiveState,
})
export class EmergencyFlashersState extends Property<typeof ActiveState> {}
