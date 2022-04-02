import { Descriptor } from '../../../decorators';
import { DriverTimeState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  multiple: true,
  name: 'drivers_time_states',
  value: DriverTimeState,
})
export class DriversTimeStates extends Property<typeof DriverTimeState> {}
