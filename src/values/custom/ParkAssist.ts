import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';

import { ActiveState, LocationLongitudinal, Muted } from './';

const ParkAssistDescriptor = {
  items: {
    alarm: ActiveState,
    location: LocationLongitudinal,
    muted: Muted,
  },
  order: ['location', 'alarm', 'muted'],
  size: 3,
};

@Descriptor(ParkAssistDescriptor)
export class ParkAssist extends CustomType<typeof ParkAssistDescriptor.items> {}
