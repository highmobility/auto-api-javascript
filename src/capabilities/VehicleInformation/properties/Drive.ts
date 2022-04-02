import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const DriveEnumDescriptor = {
  values: {
    awd: 3,
    four_wd: 2,
    fwd: 0,
    rwd: 1,
  },
  size: 1,
};

@Descriptor(DriveEnumDescriptor)
export class DriveEnum extends Enum<keyof typeof DriveEnumDescriptor.values> {}

@Descriptor({
  id: 22,
  name: 'drive',
  value: DriveEnum,
})
export class Drive extends Property<typeof DriveEnum> {}
