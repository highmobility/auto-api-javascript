import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';

import { ActiveState, Location } from './';

const ReadingLampDescriptor = {
  items: {
    location: Location,
    state: ActiveState,
  },
  order: ['location', 'state'],
  size: 2,
};

@Descriptor(ReadingLampDescriptor)
export class ReadingLamp extends CustomType<typeof ReadingLampDescriptor.items> {}
