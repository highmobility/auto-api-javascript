import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { Enum } from '../base/Enum';
import { UInteger } from '../base/UInteger';

@Size(1)
export class DriverWorkingStateDriverNumber extends UInteger {}

const DriverWorkingStateWorkingStateDescriptor = {
  values: {
    driver_available: 1,
    driving: 3,
    resting: 0,
    working: 2,
  },
  size: 1,
};

@Descriptor(DriverWorkingStateWorkingStateDescriptor)
export class DriverWorkingStateWorkingState extends Enum<
  keyof typeof DriverWorkingStateWorkingStateDescriptor.values
> {}

const DriverWorkingStateDescriptor = {
  items: {
    driver_number: DriverWorkingStateDriverNumber,
    working_state: DriverWorkingStateWorkingState,
  },
  order: ['driver_number', 'working_state'],
  size: 2,
};

@Descriptor(DriverWorkingStateDescriptor)
export class DriverWorkingState extends CustomType<typeof DriverWorkingStateDescriptor.items> {}
