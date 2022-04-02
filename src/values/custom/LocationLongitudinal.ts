import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const LocationLongitudinalDescriptor = {
  values: {
    front: 0,
    rear: 1,
  },
  size: 1,
};

@Descriptor(LocationLongitudinalDescriptor)
export class LocationLongitudinal extends Enum<
  keyof typeof LocationLongitudinalDescriptor.values
> {}
