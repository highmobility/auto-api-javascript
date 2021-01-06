import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Hood extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 103,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('hood'),
      Configuration.getUniversalProperties(),
    );
  }
}
