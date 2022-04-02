import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { OperatorName } from './properties/OperatorName';
import { OperatorTicketId } from './properties/OperatorTicketId';
import { Status } from './properties/Status';
import { TicketEndTime } from './properties/TicketEndTime';
import { TicketStartTime } from './properties/TicketStartTime';

enum Properties {
  OperatorName = 'operator_name',
  OperatorTicketId = 'operator_ticket_id',
  Status = 'status',
  TicketEndTime = 'ticket_end_time',
  TicketStartTime = 'ticket_start_time',
}

const ParkingTicketDescriptor = {
  category: 'parking',
  identifier: [0, 71],
  name: 'parking_ticket',
  prettyName: 'Parking Ticket',
  properties: {
    operator_name: OperatorName,
    operator_ticket_id: OperatorTicketId,
    status: Status,
    ticket_end_time: TicketEndTime,
    ticket_start_time: TicketStartTime,
  },
  state: [OperatorName, OperatorTicketId, Status, TicketEndTime, TicketStartTime],
};

@Descriptor(ParkingTicketDescriptor)
export class ParkingTicket extends Capability<typeof ParkingTicketDescriptor.properties> {
  public static Name = ParkingTicketDescriptor.name;
  public static Properties = Properties;
}
