import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Maintenance extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 52,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('maintenance'),
      Configuration.getUniversalProperties(),
    );
  }
}
