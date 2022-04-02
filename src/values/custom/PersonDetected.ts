import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';

import { Detected, SeatLocation } from './';

const PersonDetectedDescriptor = {
  items: {
    detected: Detected,
    location: SeatLocation,
  },
  order: ['location', 'detected'],
  size: 2,
};

@Descriptor(PersonDetectedDescriptor)
export class PersonDetected extends CustomType<typeof PersonDetectedDescriptor.items> {}
