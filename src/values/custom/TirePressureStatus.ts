import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

import { LocationWheel } from './';

const TirePressureStatusStatusDescriptor = {
  values: {
    alert: 2,
    low: 1,
    normal: 0,
  },
  size: 1,
};

@Descriptor(TirePressureStatusStatusDescriptor)
export class TirePressureStatusStatus extends Enum<
  keyof typeof TirePressureStatusStatusDescriptor.values
> {}

const TirePressureStatusDescriptor = {
  items: {
    location: LocationWheel,
    status: TirePressureStatusStatus,
  },
  order: ['location', 'status'],
  size: 2,
};

@Descriptor(TirePressureStatusDescriptor)
export class TirePressureStatus extends CustomType<typeof TirePressureStatusDescriptor.items> {}
