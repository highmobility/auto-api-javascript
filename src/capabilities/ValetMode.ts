import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class ValetMode extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 40,
  };
  static readonly Name = 'valet_mode';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(ValetMode.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
