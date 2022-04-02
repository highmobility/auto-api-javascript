import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const GearboxEnumDescriptor = {
  values: {
    automatic: 1,
    manual: 0,
    semi_automatic: 2,
  },
  size: 1,
};

@Descriptor(GearboxEnumDescriptor)
export class GearboxEnum extends Enum<keyof typeof GearboxEnumDescriptor.values> {}

@Descriptor({
  id: 14,
  name: 'gearbox',
  value: GearboxEnum,
})
export class Gearbox extends Property<typeof GearboxEnum> {}
