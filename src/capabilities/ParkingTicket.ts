import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class ParkingTicket extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 71,
  };
  static readonly Name = 'parking_ticket';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(ParkingTicket.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
