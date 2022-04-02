import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const EngagedEnumDescriptor = {
  values: {
    engaged: 1,
    not_engaged: 0,
  },
  size: 1,
};

@Descriptor(EngagedEnumDescriptor)
export class EngagedEnum extends Enum<keyof typeof EngagedEnumDescriptor.values> {}

@Descriptor({
  id: 2,
  name: 'engaged',
  value: EngagedEnum,
})
export class Engaged extends Property<typeof EngagedEnum> {}
