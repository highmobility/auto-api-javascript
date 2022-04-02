import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const ScreenEnumDescriptor = {
  values: {
    front: 0,
    rear: 1,
  },
  size: 1,
};

@Descriptor(ScreenEnumDescriptor)
export class ScreenEnum extends Enum<keyof typeof ScreenEnumDescriptor.values> {}

@Descriptor({
  id: 3,
  name: 'screen',
  value: ScreenEnum,
})
export class Screen extends Property<typeof ScreenEnum> {}
