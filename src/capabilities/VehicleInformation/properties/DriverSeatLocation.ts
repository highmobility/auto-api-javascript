import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const DriverSeatLocationEnumDescriptor = {
  values: {
    center: 2,
    left: 0,
    right: 1,
  },
  size: 1,
};

@Descriptor(DriverSeatLocationEnumDescriptor)
export class DriverSeatLocationEnum extends Enum<
  keyof typeof DriverSeatLocationEnumDescriptor.values
> {}

@Descriptor({
  id: 16,
  name: 'driver_seat_location',
  value: DriverSeatLocationEnum,
})
export class DriverSeatLocation extends Property<typeof DriverSeatLocationEnum> {}
