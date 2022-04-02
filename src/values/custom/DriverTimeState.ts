import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { Enum } from '../base/Enum';
import { UInteger } from '../base/UInteger';

@Size(1)
export class DriverTimeStateDriverNumber extends UInteger {}

const DriverTimeStateTimeStateDescriptor = {
  values: {
    fifteen_min_before_four: 1,
    fifteen_min_before_nine: 3,
    fifteen_min_before_sixteen: 5,
    four_reached: 2,
    nine_reached: 4,
    normal: 0,
    sixteen_reached: 6,
  },
  size: 1,
};

@Descriptor(DriverTimeStateTimeStateDescriptor)
export class DriverTimeStateTimeState extends Enum<
  keyof typeof DriverTimeStateTimeStateDescriptor.values
> {}

const DriverTimeStateDescriptor = {
  items: {
    driver_number: DriverTimeStateDriverNumber,
    time_state: DriverTimeStateTimeState,
  },
  order: ['driver_number', 'time_state'],
  size: 2,
};

@Descriptor(DriverTimeStateDescriptor)
export class DriverTimeState extends CustomType<typeof DriverTimeStateDescriptor.items> {}
