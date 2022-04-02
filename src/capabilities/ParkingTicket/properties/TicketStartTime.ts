import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class TicketStartTimeTimestamp extends Timestamp {}

@Descriptor({
  id: 4,
  name: 'ticket_start_time',
  value: TicketStartTimeTimestamp,
})
export class TicketStartTime extends Property<typeof TicketStartTimeTimestamp> {}
