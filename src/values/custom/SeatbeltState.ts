import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

import { SeatLocation } from './';

const SeatbeltStateFastenedStateDescriptor = {
  values: {
    fastened: 1,
    not_fastened: 0,
  },
  size: 1,
};

@Descriptor(SeatbeltStateFastenedStateDescriptor)
export class SeatbeltStateFastenedState extends Enum<
  keyof typeof SeatbeltStateFastenedStateDescriptor.values
> {}

const SeatbeltStateDescriptor = {
  items: {
    fastened_state: SeatbeltStateFastenedState,
    location: SeatLocation,
  },
  order: ['location', 'fastened_state'],
  size: 2,
};

@Descriptor(SeatbeltStateDescriptor)
export class SeatbeltState extends CustomType<typeof SeatbeltStateDescriptor.items> {}
