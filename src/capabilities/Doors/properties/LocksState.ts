import { Descriptor } from '../../../decorators';
import { LockState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 6,
  name: 'locks_state',
  value: LockState,
})
export class LocksState extends Property<typeof LockState> {}
