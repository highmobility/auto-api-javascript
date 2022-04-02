import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Pressure } from '../units';

import { LocationWheel } from './';

const TirePressureDescriptor = {
  items: {
    location: LocationWheel,
    pressure: Pressure,
  },
  order: ['location', 'pressure'],
  size: 11,
};

@Descriptor(TirePressureDescriptor)
export class TirePressure extends CustomType<typeof TirePressureDescriptor.items> {}
