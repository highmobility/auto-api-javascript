import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const WipersIntensityEnumDescriptor = {
  values: {
    level_0: 0,
    level_1: 1,
    level_2: 2,
    level_3: 3,
  },
  size: 1,
};

@Descriptor(WipersIntensityEnumDescriptor)
export class WipersIntensityEnum extends Enum<keyof typeof WipersIntensityEnumDescriptor.values> {}

@Descriptor({
  id: 2,
  name: 'wipers_intensity',
  value: WipersIntensityEnum,
})
export class WipersIntensity extends Property<typeof WipersIntensityEnum> {}
