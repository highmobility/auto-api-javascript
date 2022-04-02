import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';

import { ActiveState, Time } from './';

const DepartureTimeDescriptor = {
  items: {
    state: ActiveState,
    time: Time,
  },
  order: ['state', 'time'],
  size: 3,
};

@Descriptor(DepartureTimeDescriptor)
export class DepartureTime extends CustomType<typeof DepartureTimeDescriptor.items> {}
