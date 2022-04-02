import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const StarterBatteryStateEnumDescriptor = {
  values: {
    green: 2,
    red: 0,
    yellow: 1,
  },
  size: 1,
};

@Descriptor(StarterBatteryStateEnumDescriptor)
export class StarterBatteryStateEnum extends Enum<
  keyof typeof StarterBatteryStateEnumDescriptor.values
> {}

@Descriptor({
  id: 29,
  name: 'starter_battery_state',
  value: StarterBatteryStateEnum,
})
export class StarterBatteryState extends Property<typeof StarterBatteryStateEnum> {}
