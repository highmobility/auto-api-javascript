import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const DisplayUnitEnumDescriptor = {
  values: {
    km: 0,
    miles: 1,
  },
  size: 1,
};

@Descriptor(DisplayUnitEnumDescriptor)
export class DisplayUnitEnum extends Enum<keyof typeof DisplayUnitEnumDescriptor.values> {}

@Descriptor({
  id: 15,
  name: 'display_unit',
  value: DisplayUnitEnum,
})
export class DisplayUnit extends Property<typeof DisplayUnitEnum> {}
