import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const GearModeEnumDescriptor = {
  values: {
    drive: 4,
    low_gear: 5,
    manual: 0,
    neutral: 3,
    park: 1,
    reverse: 2,
    sport: 6,
  },
  size: 1,
};

@Descriptor(GearModeEnumDescriptor)
export class GearModeEnum extends Enum<keyof typeof GearModeEnumDescriptor.values> {}

@Descriptor({
  id: 11,
  name: 'gear_mode',
  value: GearModeEnum,
})
export class GearMode extends Property<typeof GearModeEnum> {}
