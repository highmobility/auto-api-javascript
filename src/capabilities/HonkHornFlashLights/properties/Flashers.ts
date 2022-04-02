import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const FlashersEnumDescriptor = {
  values: {
    emergency_flasher_active: 1,
    inactive: 0,
    left_flasher_active: 2,
    right_flasher_active: 3,
  },
  size: 1,
};

@Descriptor(FlashersEnumDescriptor)
export class FlashersEnum extends Enum<keyof typeof FlashersEnumDescriptor.values> {}

@Descriptor({
  id: 1,
  name: 'flashers',
  value: FlashersEnum,
})
export class Flashers extends Property<typeof FlashersEnum> {}
