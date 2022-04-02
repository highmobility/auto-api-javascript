import { Angle } from '../../../values/units';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  name: 'route_incline',
  value: Angle,
})
export class RouteIncline extends Property<typeof Angle> {}
