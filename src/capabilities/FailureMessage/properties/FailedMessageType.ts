import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { UInteger } from '../../../values/base/UInteger';

@Size(1)
export class FailedMessageTypeUInteger extends UInteger {}

@Descriptor({
  id: 2,
  name: 'failed_message_type',
  value: FailedMessageTypeUInteger,
})
export class FailedMessageType extends Property<typeof FailedMessageTypeUInteger> {}
