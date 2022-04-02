import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Speed } from '../../../values/units';

@Descriptor({
  id: 3,
  name: 'target_speed',
  value: Speed,
})
export class TargetSpeed extends Property<typeof Speed> {}
