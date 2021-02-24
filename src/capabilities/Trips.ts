import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Trips extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 106,
  };
  static readonly Name = 'trips';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Trips.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
