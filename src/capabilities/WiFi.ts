import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class WiFi extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 89,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('wi_fi'),
      Configuration.getUniversalProperties(),
    );
  }
}
