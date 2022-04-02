import { Descriptor } from '../../../decorators';
import { DrivingMode as DrivingModeCustomType } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  name: 'driving_mode',
  value: DrivingModeCustomType,
})
export class DrivingMode extends Property<typeof DrivingModeCustomType> {}
