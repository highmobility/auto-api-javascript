import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { Length } from '../units';
import { UInteger } from '../base/UInteger';

@Size(1)
export class TripMeterId extends UInteger {}

const TripMeterDescriptor = {
  items: {
    distance: Length,
    id: TripMeterId,
  },
  order: ['id', 'distance'],
  size: 11,
};

@Descriptor(TripMeterDescriptor)
export class TripMeter extends CustomType<typeof TripMeterDescriptor.items> {}
