import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { UInteger } from '../../../values/base/UInteger';

@Size(2)
export class FailedMessageIdUInteger extends UInteger {}

@Descriptor({
  id: 1,
  name: 'failed_message_id',
  value: FailedMessageIdUInteger,
})
export class FailedMessageId extends Property<typeof FailedMessageIdUInteger> {}
