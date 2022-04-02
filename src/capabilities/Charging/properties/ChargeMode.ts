import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const ChargeModeEnumDescriptor = {
  values: {
    immediate: 0,
    inductive: 2,
    timer_based: 1,
  },
  size: 1,
};

@Descriptor(ChargeModeEnumDescriptor)
export class ChargeModeEnum extends Enum<keyof typeof ChargeModeEnumDescriptor.values> {}

@Descriptor({
  id: 12,
  name: 'charge_mode',
  value: ChargeModeEnum,
})
export class ChargeMode extends Property<typeof ChargeModeEnum> {}
