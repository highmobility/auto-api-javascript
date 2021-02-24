import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Graphics extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 81,
  };
  static readonly Name = 'graphics';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Graphics.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
