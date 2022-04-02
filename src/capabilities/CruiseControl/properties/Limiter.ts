import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const LimiterEnumDescriptor = {
  values: {
    higher_speed_requested: 1,
    lower_speed_requested: 2,
    not_set: 0,
    speed_fixed: 3,
  },
  size: 1,
};

@Descriptor(LimiterEnumDescriptor)
export class LimiterEnum extends Enum<keyof typeof LimiterEnumDescriptor.values> {}

@Descriptor({
  id: 2,
  name: 'limiter',
  value: LimiterEnum,
})
export class Limiter extends Property<typeof LimiterEnum> {}
