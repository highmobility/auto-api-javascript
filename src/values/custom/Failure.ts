import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';
import { String } from '../base/String';

export class FailureDescription extends String {}

const FailureReasonDescriptor = {
  values: {
    execution_timeout: 1,
    format_error: 2,
    oem_error: 6,
    pending: 5,
    privacy_mode_active: 7,
    rate_limit: 0,
    unauthorised: 3,
    unknown: 4,
  },
  size: 1,
};

@Descriptor(FailureReasonDescriptor)
export class FailureReason extends Enum<keyof typeof FailureReasonDescriptor.values> {}

const FailureDescriptor = {
  items: {
    description: FailureDescription,
    reason: FailureReason,
  },
  order: ['reason', 'description'],
};

@Descriptor(FailureDescriptor)
export class Failure extends CustomType<typeof FailureDescriptor.items> {}
