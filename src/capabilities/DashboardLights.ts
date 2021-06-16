import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  BulbFailures = 'bulb_failures',
  DashboardLights = 'dashboard_lights',
}

export class DashboardLights extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 97,
  };
  static readonly Name = 'dashboard_lights';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(DashboardLights.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
