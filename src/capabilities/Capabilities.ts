import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Capabilities = 'capabilities',
  Webhooks = 'webhooks',
}

export class Capabilities extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 16,
  };
  static readonly Name = 'capabilities';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Capabilities.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
