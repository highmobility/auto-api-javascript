import { Descriptor } from '../../../decorators';
import { LockState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  name: 'lock',
  value: LockState,
})
export class Lock extends Property<typeof LockState> {}
