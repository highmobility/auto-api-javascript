import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Location = 'location',
}

export class KeyfobPosition extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 72,
  };
  static readonly Name = 'keyfob_position';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(KeyfobPosition.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
