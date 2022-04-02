import { Descriptor } from '../../../decorators';
import { LockState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'gas_flap_lock',
  value: LockState,
})
export class GasFlapLock extends Property<typeof LockState> {}
