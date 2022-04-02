import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class TicketEndTimeTimestamp extends Timestamp {}

@Descriptor({
  id: 5,
  name: 'ticket_end_time',
  value: TicketEndTimeTimestamp,
})
export class TicketEndTime extends Property<typeof TicketEndTimeTimestamp> {}
