import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class DashboardLights extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 97,
  };
  static readonly Name = 'dashboard_lights';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(DashboardLights.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
