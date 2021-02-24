import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Tachograph extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 100,
  };
  static readonly Name = 'tachograph';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Tachograph.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
