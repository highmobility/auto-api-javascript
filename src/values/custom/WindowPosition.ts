import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

import { WindowLocation } from './';

const WindowPositionPositionDescriptor = {
  values: {
    closed: 0,
    intermediate: 2,
    open: 1,
  },
  size: 1,
};

@Descriptor(WindowPositionPositionDescriptor)
export class WindowPositionPosition extends Enum<
  keyof typeof WindowPositionPositionDescriptor.values
> {}

const WindowPositionDescriptor = {
  items: {
    location: WindowLocation,
    position: WindowPositionPosition,
  },
  order: ['location', 'position'],
  size: 2,
};

@Descriptor(WindowPositionDescriptor)
export class WindowPosition extends CustomType<typeof WindowPositionDescriptor.items> {}
