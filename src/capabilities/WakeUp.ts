import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Status = 'status',
}

export class WakeUp extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 34,
  };
  static readonly Name = 'wake_up';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(WakeUp.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
