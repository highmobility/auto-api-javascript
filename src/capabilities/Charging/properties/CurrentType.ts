import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const CurrentTypeEnumDescriptor = {
  values: {
    alternating_current: 0,
    direct_current: 1,
  },
  size: 1,
};

@Descriptor(CurrentTypeEnumDescriptor)
export class CurrentTypeEnum extends Enum<keyof typeof CurrentTypeEnumDescriptor.values> {}

@Descriptor({
  id: 27,
  name: 'current_type',
  value: CurrentTypeEnum,
})
export class CurrentType extends Property<typeof CurrentTypeEnum> {}
