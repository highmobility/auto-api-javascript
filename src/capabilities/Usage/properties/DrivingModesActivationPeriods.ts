import { Descriptor } from '../../../decorators';
import { DrivingModeActivationPeriod } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 5,
  multiple: true,
  name: 'driving_modes_activation_periods',
  value: DrivingModeActivationPeriod,
})
export class DrivingModesActivationPeriods extends Property<typeof DrivingModeActivationPeriod> {}
