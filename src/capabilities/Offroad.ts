import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Offroad extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 82,
  };
  static readonly Name = 'offroad';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Offroad.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
