import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const PlugTypeEnumDescriptor = {
  values: {
    ccs: 2,
    chademo: 3,
    type_1: 0,
    type_2: 1,
  },
  size: 1,
};

@Descriptor(PlugTypeEnumDescriptor)
export class PlugTypeEnum extends Enum<keyof typeof PlugTypeEnumDescriptor.values> {}

@Descriptor({
  id: 15,
  name: 'plug_type',
  value: PlugTypeEnum,
})
export class PlugType extends Property<typeof PlugTypeEnum> {}
