import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';

import { DrivingMode, Percentage } from './';

const DrivingModeActivationPeriodDescriptor = {
  items: {
    driving_mode: DrivingMode,
    period: Percentage,
  },
  order: ['driving_mode', 'period'],
  size: 9,
};

@Descriptor(DrivingModeActivationPeriodDescriptor)
export class DrivingModeActivationPeriod extends CustomType<
  typeof DrivingModeActivationPeriodDescriptor.items
> {}
