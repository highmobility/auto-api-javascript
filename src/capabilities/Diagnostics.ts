import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Diagnostics extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 51,
  };
  static readonly Name = 'diagnostics';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Diagnostics.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
