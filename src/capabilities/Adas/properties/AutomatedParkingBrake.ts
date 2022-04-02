import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 7,
  name: 'automated_parking_brake',
  value: ActiveState,
})
export class AutomatedParkingBrake extends Property<typeof ActiveState> {}
