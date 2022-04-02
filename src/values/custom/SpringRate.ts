import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Torque } from '../units';

import { Axle } from './';

const SpringRateDescriptor = {
  items: {
    axle: Axle,
    spring_rate: Torque,
  },
  order: ['axle', 'spring_rate'],
  size: 11,
};

@Descriptor(SpringRateDescriptor)
export class SpringRate extends CustomType<typeof SpringRateDescriptor.items> {}
