import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  InsideLight = 'inside_light',
  OutsideLight = 'outside_light',
}

export class LightConditions extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 84,
  };
  static readonly Name = 'light_conditions';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(LightConditions.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
