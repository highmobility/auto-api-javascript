import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  FailedMessageId = 'failed_message_id',
  FailedMessageType = 'failed_message_type',
  FailedPropertyIds = 'failed_property_ids',
  FailureDescription = 'failure_description',
  FailureReason = 'failure_reason',
}

export class FailureMessage extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 2,
  };
  static readonly Name = 'failure_message';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(FailureMessage.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
