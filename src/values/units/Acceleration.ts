import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const AccelerationDescriptor = {
  size: 10,
  units: {
    meters_per_second_squared: 0,
    gravity: 1,
  },
};

@Descriptor(AccelerationDescriptor)
export class Acceleration extends UnitType<keyof typeof AccelerationDescriptor.units> {}
