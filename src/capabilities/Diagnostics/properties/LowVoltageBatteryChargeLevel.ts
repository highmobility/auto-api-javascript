import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const LowVoltageBatteryChargeLevelEnumDescriptor = {
  values: {
    deactivation_level_1: 1,
    deactivation_level_2: 2,
    deactivation_level_3: 3,
    ok: 0,
  },
  size: 1,
};

@Descriptor(LowVoltageBatteryChargeLevelEnumDescriptor)
export class LowVoltageBatteryChargeLevelEnum extends Enum<
  keyof typeof LowVoltageBatteryChargeLevelEnumDescriptor.values
> {}

@Descriptor({
  id: 54,
  name: 'low_voltage_battery_charge_level',
  value: LowVoltageBatteryChargeLevelEnum,
})
export class LowVoltageBatteryChargeLevel extends Property<
  typeof LowVoltageBatteryChargeLevelEnum
> {}
