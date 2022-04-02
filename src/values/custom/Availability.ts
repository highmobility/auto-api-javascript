import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';
import { Frequency } from '../units';

const AvailabilityAppliesPerDescriptor = {
  values: {
    app: 0,
    vehicle: 1,
  },
  size: 1,
};

@Descriptor(AvailabilityAppliesPerDescriptor)
export class AvailabilityAppliesPer extends Enum<
  keyof typeof AvailabilityAppliesPerDescriptor.values
> {}

const AvailabilityUpdateRateDescriptor = {
  values: {
    not_available: 5,
    on_change: 6,
    trip: 1,
    trip_end: 3,
    trip_high: 0,
    trip_start_end: 2,
    unknown: 4,
  },
  size: 1,
};

@Descriptor(AvailabilityUpdateRateDescriptor)
export class AvailabilityUpdateRate extends Enum<
  keyof typeof AvailabilityUpdateRateDescriptor.values
> {}

const AvailabilityDescriptor = {
  items: {
    applies_per: AvailabilityAppliesPer,
    rate_limit: Frequency,
    update_rate: AvailabilityUpdateRate,
  },
  order: ['update_rate', 'rate_limit', 'applies_per'],
  size: 12,
};

@Descriptor(AvailabilityDescriptor)
export class Availability extends CustomType<typeof AvailabilityDescriptor.items> {}
