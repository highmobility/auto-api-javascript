import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Seats extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 86,
  };
  static readonly Name = 'seats';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Seats.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
