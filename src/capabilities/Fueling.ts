import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  GasFlapLock = 'gas_flap_lock',
  GasFlapPosition = 'gas_flap_position',
}

export class Fueling extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 64,
  };
  static readonly Name = 'fueling';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Fueling.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
