import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { FailedMessageId } from './properties/FailedMessageId';
import { FailedMessageType } from './properties/FailedMessageType';
import { FailedPropertyIds } from './properties/FailedPropertyIds';
import { FailureDescription } from './properties/FailureDescription';
import { FailureReason } from './properties/FailureReason';

enum Properties {
  FailedMessageId = 'failed_message_id',
  FailedMessageType = 'failed_message_type',
  FailedPropertyIds = 'failed_property_ids',
  FailureDescription = 'failure_description',
  FailureReason = 'failure_reason',
}

const FailureMessageDescriptor = {
  category: 'api_structure',
  identifier: [0, 2],
  name: 'failure_message',
  prettyName: 'Failure Message',
  properties: {
    failed_message_id: FailedMessageId,
    failed_message_type: FailedMessageType,
    failed_property_ids: FailedPropertyIds,
    failure_description: FailureDescription,
    failure_reason: FailureReason,
  },
  state: [FailedMessageId, FailedMessageType, FailedPropertyIds, FailureDescription, FailureReason],
};

@Descriptor(FailureMessageDescriptor)
export class FailureMessage extends Capability<typeof FailureMessageDescriptor.properties> {
  public static Name = FailureMessageDescriptor.name;
  public static Properties = Properties;
}
