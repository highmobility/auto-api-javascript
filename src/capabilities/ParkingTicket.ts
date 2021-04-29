import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  OperatorName = 'operator_name',
  OperatorTicketId = 'operator_ticket_id',
  Status = 'status',
  TicketEndTime = 'ticket_end_time',
  TicketStartTime = 'ticket_start_time',
}

export class ParkingTicket extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 71,
  };
  static readonly Name = 'parking_ticket';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(ParkingTicket.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
