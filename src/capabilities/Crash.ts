import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Crash extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 107,
  };
  static readonly Name = 'crash';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Crash.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
