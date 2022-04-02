import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';

import { Percentage, WindowLocation } from './';

const WindowOpenPercentageDescriptor = {
  items: {
    location: WindowLocation,
    open_percentage: Percentage,
  },
  order: ['location', 'open_percentage'],
  size: 9,
};

@Descriptor(WindowOpenPercentageDescriptor)
export class WindowOpenPercentage extends CustomType<typeof WindowOpenPercentageDescriptor.items> {}
