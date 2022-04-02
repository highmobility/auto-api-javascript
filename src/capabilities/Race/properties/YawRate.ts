import { AngularVelocity } from '../../../values/units';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 7,
  name: 'yaw_rate',
  value: AngularVelocity,
})
export class YawRate extends Property<typeof AngularVelocity> {}
