import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { BulbFailures } from './properties/BulbFailures';
import { DashboardLights as DashboardLightsProperty } from './properties/DashboardLights';

enum Properties {
  BulbFailures = 'bulb_failures',
  DashboardLightsProperty = 'dashboard_lights',
}

const DashboardLightsDescriptor = {
  category: 'diagnostics',
  identifier: [0, 97],
  name: 'dashboard_lights',
  prettyName: 'Dashboard Lights',
  properties: {
    bulb_failures: BulbFailures,
    dashboard_lights: DashboardLightsProperty,
  },
  state: [BulbFailures, DashboardLightsProperty],
};

@Descriptor(DashboardLightsDescriptor)
export class DashboardLights extends Capability<typeof DashboardLightsDescriptor.properties> {
  public static Name = DashboardLightsDescriptor.name;
  public static Properties = Properties;
}
