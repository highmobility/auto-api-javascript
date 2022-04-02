import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const ClearEnumDescriptor = {
  values: {
    clear: 0,
  },
  size: 1,
};

@Descriptor(ClearEnumDescriptor)
export class ClearEnum extends Enum<keyof typeof ClearEnumDescriptor.values> {}

@Descriptor({
  id: 4,
  name: 'clear',
  value: ClearEnum,
})
export class Clear extends Property<typeof ClearEnum> {}
