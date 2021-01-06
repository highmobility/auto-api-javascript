import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class ParkingTicket extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 71,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('parking_ticket'),
      Configuration.getUniversalProperties(),
    );
  }
}
