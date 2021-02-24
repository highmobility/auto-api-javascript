import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class WiFi extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 89,
  };
  static readonly Name = 'wi_fi';
  constructor() {
    super(Configuration.getCapabilityDefinition(WiFi.Name), Configuration.getUniversalProperties());
  }
}
