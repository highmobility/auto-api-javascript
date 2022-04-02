import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const EcoLevelEnumDescriptor = {
  values: {
    high: 0,
    medium: 1,
  },
  size: 1,
};

@Descriptor(EcoLevelEnumDescriptor)
export class EcoLevelEnum extends Enum<keyof typeof EcoLevelEnumDescriptor.values> {}

@Descriptor({
  id: 17,
  name: 'eco_level',
  value: EcoLevelEnum,
})
export class EcoLevel extends Property<typeof EcoLevelEnum> {}
