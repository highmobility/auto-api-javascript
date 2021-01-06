import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class ValetMode extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 40,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('valet_mode'),
      Configuration.getUniversalProperties(),
    );
  }
}
