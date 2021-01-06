import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Ignition extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 53,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('ignition'),
      Configuration.getUniversalProperties(),
    );
  }
}
