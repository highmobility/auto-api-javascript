import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Race extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 87,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('race'),
      Configuration.getUniversalProperties(),
    );
  }
}
