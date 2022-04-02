import { Descriptor } from '../../../decorators';
import { LockState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 5,
  name: 'inside_locks_state',
  value: LockState,
})
export class InsideLocksState extends Property<typeof LockState> {}
