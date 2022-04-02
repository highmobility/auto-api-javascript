import { Acceleration as AccelerationUnit } from '../units';
import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const AccelerationDirectionDescriptor = {
  values: {
    front_lateral: 2,
    lateral: 1,
    longitudinal: 0,
    rear_lateral: 3,
  },
  size: 1,
};

@Descriptor(AccelerationDirectionDescriptor)
export class AccelerationDirection extends Enum<
  keyof typeof AccelerationDirectionDescriptor.values
> {}

const AccelerationDescriptor = {
  items: {
    acceleration: AccelerationUnit,
    direction: AccelerationDirection,
  },
  order: ['direction', 'acceleration'],
  size: 11,
};

@Descriptor(AccelerationDescriptor)
export class Acceleration extends CustomType<typeof AccelerationDescriptor.items> {}
