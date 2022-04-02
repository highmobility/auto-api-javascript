import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const SwitchPositionEnumDescriptor = {
  values: {
    automatic: 0,
    dipped_headlights: 1,
    parking_light_left: 3,
    parking_light_right: 2,
    sidelights: 4,
  },
  size: 1,
};

@Descriptor(SwitchPositionEnumDescriptor)
export class SwitchPositionEnum extends Enum<keyof typeof SwitchPositionEnumDescriptor.values> {}

@Descriptor({
  id: 10,
  name: 'switch_position',
  value: SwitchPositionEnum,
})
export class SwitchPosition extends Property<typeof SwitchPositionEnum> {}
