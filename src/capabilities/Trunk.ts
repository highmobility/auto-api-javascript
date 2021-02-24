import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Trunk extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 33,
  };
  static readonly Name = 'trunk';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Trunk.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
