import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

import { Position } from './';

const DoorPositionLocationDescriptor = {
  values: {
    all: 5,
    front_left: 0,
    front_right: 1,
    rear_left: 3,
    rear_right: 2,
  },
  size: 1,
};

@Descriptor(DoorPositionLocationDescriptor)
export class DoorPositionLocation extends Enum<
  keyof typeof DoorPositionLocationDescriptor.values
> {}

const DoorPositionDescriptor = {
  items: {
    location: DoorPositionLocation,
    position: Position,
  },
  order: ['location', 'position'],
  size: 2,
};

@Descriptor(DoorPositionDescriptor)
export class DoorPosition extends CustomType<typeof DoorPositionDescriptor.items> {}
