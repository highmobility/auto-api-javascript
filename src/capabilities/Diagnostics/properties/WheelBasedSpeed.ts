import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Speed } from '../../../values/units';

@Descriptor({
  id: 23,
  name: 'wheel_based_speed',
  value: Speed,
})
export class WheelBasedSpeed extends Property<typeof Speed> {}
