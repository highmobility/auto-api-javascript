import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const SmartChargingStatusEnumDescriptor = {
  values: {
    peak_setting_active: 2,
    scc_is_active: 1,
    wallbox_is_active: 0,
  },
  size: 1,
};

@Descriptor(SmartChargingStatusEnumDescriptor)
export class SmartChargingStatusEnum extends Enum<
  keyof typeof SmartChargingStatusEnumDescriptor.values
> {}

@Descriptor({
  id: 30,
  name: 'smart_charging_status',
  value: SmartChargingStatusEnum,
})
export class SmartChargingStatus extends Property<typeof SmartChargingStatusEnum> {}
