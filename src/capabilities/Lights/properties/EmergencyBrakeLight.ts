import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 6,
  name: 'emergency_brake_light',
  value: ActiveState,
})
export class EmergencyBrakeLight extends Property<typeof ActiveState> {}
