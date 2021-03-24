import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Handle = 'handle',
  Text = 'text',
}

export class Messaging extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 55,
  };
  static readonly Name = 'messaging';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Messaging.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
