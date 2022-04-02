import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { WheelRpm } from '../../../values/custom';

@Descriptor({
  id: 28,
  multiple: true,
  name: 'wheel_rpms',
  value: WheelRpm,
})
export class WheelRpms extends Property<typeof WheelRpm> {}
