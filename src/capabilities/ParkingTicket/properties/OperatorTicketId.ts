import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class OperatorTicketIdString extends String {}

@Descriptor({
  id: 3,
  name: 'operator_ticket_id',
  value: OperatorTicketIdString,
})
export class OperatorTicketId extends Property<typeof OperatorTicketIdString> {}
