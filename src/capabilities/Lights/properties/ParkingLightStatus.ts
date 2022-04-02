import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const ParkingLightStatusEnumDescriptor = {
  values: {
    both: 3,
    left: 1,
    off: 0,
    right: 2,
  },
  size: 1,
};

@Descriptor(ParkingLightStatusEnumDescriptor)
export class ParkingLightStatusEnum extends Enum<
  keyof typeof ParkingLightStatusEnumDescriptor.values
> {}

@Descriptor({
  id: 11,
  name: 'parking_light_status',
  value: ParkingLightStatusEnum,
})
export class ParkingLightStatus extends Property<typeof ParkingLightStatusEnum> {}
