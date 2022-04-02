import { Descriptor } from '../../../decorators';
import { DriverWorkingState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  multiple: true,
  name: 'drivers_working_states',
  value: DriverWorkingState,
})
export class DriversWorkingStates extends Property<typeof DriverWorkingState> {}
