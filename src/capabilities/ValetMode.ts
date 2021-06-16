import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Status = 'status',
}

export class ValetMode extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 40,
  };
  static readonly Name = 'valet_mode';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(ValetMode.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
