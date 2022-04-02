import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { Duration } from '../units';
import { String } from '../base/String';
import { UInteger } from '../base/UInteger';

@Size(2)
export class CheckControlMessageId extends UInteger {}

export class CheckControlMessageStatus extends String {}

export class CheckControlMessageText extends String {}

const CheckControlMessageDescriptor = {
  items: {
    id: CheckControlMessageId,
    remaining_time: Duration,
    status: CheckControlMessageStatus,
    text: CheckControlMessageText,
  },
  order: ['id', 'remaining_time', 'text', 'status'],
};

@Descriptor(CheckControlMessageDescriptor)
export class CheckControlMessage extends CustomType<typeof CheckControlMessageDescriptor.items> {}
