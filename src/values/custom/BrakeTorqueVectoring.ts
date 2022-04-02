import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';

import { ActiveState, Axle } from './';

const BrakeTorqueVectoringDescriptor = {
  items: {
    axle: Axle,
    state: ActiveState,
  },
  order: ['axle', 'state'],
  size: 2,
};

@Descriptor(BrakeTorqueVectoringDescriptor)
export class BrakeTorqueVectoring extends CustomType<typeof BrakeTorqueVectoringDescriptor.items> {}
