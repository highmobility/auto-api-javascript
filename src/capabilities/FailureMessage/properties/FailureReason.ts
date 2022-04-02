import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const FailureReasonEnumDescriptor = {
  values: {
    execution_timeout: 3,
    incorrect_state: 2,
    invalid_command: 5,
    oem_error: 8,
    pending: 6,
    privacy_mode_active: 9,
    rate_limit: 7,
    unauthorised: 1,
    unsupported_capability: 0,
    vehicle_asleep: 4,
  },
  size: 1,
};

@Descriptor(FailureReasonEnumDescriptor)
export class FailureReasonEnum extends Enum<keyof typeof FailureReasonEnumDescriptor.values> {}

@Descriptor({
  id: 3,
  name: 'failure_reason',
  value: FailureReasonEnum,
})
export class FailureReason extends Property<typeof FailureReasonEnum> {}
