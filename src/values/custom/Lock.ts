import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';

import { Location, LockState } from './';

const LockDescriptor = {
  items: {
    location: Location,
    lock_state: LockState,
  },
  order: ['location', 'lock_state'],
  size: 2,
};

@Descriptor(LockDescriptor)
export class Lock extends CustomType<typeof LockDescriptor.items> {}
