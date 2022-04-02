import { Descriptor } from '../../../decorators';
import { LockSafety as LockSafetyCustomType } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 3,
  name: 'lock_safety',
  value: LockSafetyCustomType,
})
export class LockSafety extends Property<typeof LockSafetyCustomType> {}
