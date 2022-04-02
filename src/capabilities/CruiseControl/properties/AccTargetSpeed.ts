import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Speed } from '../../../values/units';

@Descriptor({
  id: 5,
  name: 'acc_target_speed',
  value: Speed,
})
export class AccTargetSpeed extends Property<typeof Speed> {}
