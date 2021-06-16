import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  AccessoriesStatus = 'accessories_status',
  State = 'state',
  Status = 'status',
}

export class Ignition extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 53,
  };
  static readonly Name = 'ignition';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Ignition.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
