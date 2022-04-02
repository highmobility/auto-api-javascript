import { DashboardLight } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  multiple: true,
  name: 'dashboard_lights',
  value: DashboardLight,
})
export class DashboardLights extends Property<typeof DashboardLight> {}
