import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Mobile extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 102,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('mobile'),
      Configuration.getUniversalProperties(),
    );
  }
}
