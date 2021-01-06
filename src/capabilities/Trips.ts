import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Trips extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 106,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('trips'),
      Configuration.getUniversalProperties(),
    );
  }
}
