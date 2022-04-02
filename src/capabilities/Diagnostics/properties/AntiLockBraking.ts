import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 16,
  name: 'anti_lock_braking',
  value: ActiveState,
})
export class AntiLockBraking extends Property<typeof ActiveState> {}
