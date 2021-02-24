import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Ignition extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 53,
  };
  static readonly Name = 'ignition';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Ignition.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
