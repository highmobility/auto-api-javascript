import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const ChargingWindowChosenEnumDescriptor = {
  values: {
    chosen: 1,
    not_chosen: 0,
  },
  size: 1,
};

@Descriptor(ChargingWindowChosenEnumDescriptor)
export class ChargingWindowChosenEnum extends Enum<
  keyof typeof ChargingWindowChosenEnumDescriptor.values
> {}

@Descriptor({
  id: 16,
  name: 'charging_window_chosen',
  value: ChargingWindowChosenEnum,
})
export class ChargingWindowChosen extends Property<typeof ChargingWindowChosenEnum> {}
