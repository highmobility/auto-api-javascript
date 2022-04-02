import { Angle } from '../../../values/units';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 5,
  name: 'steering_angle',
  value: Angle,
})
export class SteeringAngle extends Property<typeof Angle> {}
