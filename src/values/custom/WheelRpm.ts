import { AngularVelocity } from '../units';
import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';

import { LocationWheel } from './';

const WheelRpmDescriptor = {
  items: {
    location: LocationWheel,
    rpm: AngularVelocity,
  },
  order: ['location', 'rpm'],
  size: 11,
};

@Descriptor(WheelRpmDescriptor)
export class WheelRpm extends CustomType<typeof WheelRpmDescriptor.items> {}
