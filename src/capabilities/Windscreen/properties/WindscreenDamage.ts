import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const WindscreenDamageEnumDescriptor = {
  values: {
    damage_larger_than_1_inch: 3,
    damage_smaller_than_1_inch: 2,
    impact_but_no_damage_detected: 1,
    no_impact_detected: 0,
  },
  size: 1,
};

@Descriptor(WindscreenDamageEnumDescriptor)
export class WindscreenDamageEnum extends Enum<
  keyof typeof WindscreenDamageEnumDescriptor.values
> {}

@Descriptor({
  id: 3,
  name: 'windscreen_damage',
  value: WindscreenDamageEnum,
})
export class WindscreenDamage extends Property<typeof WindscreenDamageEnum> {}
