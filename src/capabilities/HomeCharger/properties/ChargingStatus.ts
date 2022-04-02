import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const ChargingStatusEnumDescriptor = {
  values: {
    charging: 2,
    disconnected: 0,
    plugged_in: 1,
  },
  size: 1,
};

@Descriptor(ChargingStatusEnumDescriptor)
export class ChargingStatusEnum extends Enum<keyof typeof ChargingStatusEnumDescriptor.values> {}

@Descriptor({
  id: 1,
  name: 'charging_status',
  value: ChargingStatusEnum,
})
export class ChargingStatus extends Property<typeof ChargingStatusEnum> {}
