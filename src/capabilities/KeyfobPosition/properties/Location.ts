import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const LocationEnumDescriptor = {
  values: {
    inside_car: 5,
    out_of_range: 0,
    outside_behind_car: 4,
    outside_driver_side: 1,
    outside_in_front_of_car: 2,
    outside_passenger_side: 3,
  },
  size: 1,
};

@Descriptor(LocationEnumDescriptor)
export class LocationEnum extends Enum<keyof typeof LocationEnumDescriptor.values> {}

@Descriptor({
  id: 1,
  name: 'location',
  value: LocationEnum,
})
export class Location extends Property<typeof LocationEnum> {}
