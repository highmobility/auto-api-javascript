import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'wheel_suspension',
  value: Percentage,
})
export class WheelSuspension extends Property<typeof Percentage> {}
