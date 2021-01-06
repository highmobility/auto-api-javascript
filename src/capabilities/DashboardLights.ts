import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class DashboardLights extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 97,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('dashboard_lights'),
      Configuration.getUniversalProperties(),
    );
  }
}
