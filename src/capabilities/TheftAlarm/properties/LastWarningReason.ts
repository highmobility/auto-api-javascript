import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const LastWarningReasonEnumDescriptor = {
  values: {
    basis_alarm: 1,
    center_box: 11,
    common_alm_in: 8,
    door_front_left: 2,
    door_front_right: 3,
    door_rear_left: 4,
    door_rear_right: 5,
    glovebox: 10,
    hold_com: 18,
    hood: 6,
    horn: 17,
    its: 14,
    its_slv: 15,
    no_alarm: 0,
    panic: 9,
    rear_box: 12,
    remote: 19,
    sensor_vta: 13,
    tps: 16,
    trunk: 7,
    unknown: 20,
  },
  size: 1,
};

@Descriptor(LastWarningReasonEnumDescriptor)
export class LastWarningReasonEnum extends Enum<
  keyof typeof LastWarningReasonEnumDescriptor.values
> {}

@Descriptor({
  id: 4,
  name: 'last_warning_reason',
  value: LastWarningReasonEnum,
})
export class LastWarningReason extends Property<typeof LastWarningReasonEnum> {}
