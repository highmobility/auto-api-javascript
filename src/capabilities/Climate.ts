import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Climate extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 36,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('climate'),
      Configuration.getUniversalProperties(),
    );
  }
}
