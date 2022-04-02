import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const TimeformatEnumDescriptor = {
  values: {
    twelve_h: 0,
    twenty_four_h: 1,
  },
  size: 1,
};

@Descriptor(TimeformatEnumDescriptor)
export class TimeformatEnum extends Enum<keyof typeof TimeformatEnumDescriptor.values> {}

@Descriptor({
  id: 21,
  name: 'timeformat',
  value: TimeformatEnum,
})
export class Timeformat extends Property<typeof TimeformatEnum> {}
