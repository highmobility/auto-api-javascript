import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Doors extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 32,
  };
  static readonly Name = 'doors';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Doors.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
