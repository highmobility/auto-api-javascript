import { Angle } from '../../../values/units';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 8,
  name: 'rear_suspension_steering',
  value: Angle,
})
export class RearSuspensionSteering extends Property<typeof Angle> {}
