import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { RouteIncline } from './properties/RouteIncline';
import { WheelSuspension } from './properties/WheelSuspension';

enum Properties {
  RouteIncline = 'route_incline',
  WheelSuspension = 'wheel_suspension',
}

const OffroadDescriptor = {
  category: 'diagnostics',
  identifier: [0, 82],
  name: 'offroad',
  prettyName: 'Offroad',
  properties: {
    route_incline: RouteIncline,
    wheel_suspension: WheelSuspension,
  },
  state: [RouteIncline, WheelSuspension],
};

@Descriptor(OffroadDescriptor)
export class Offroad extends Capability<typeof OffroadDescriptor.properties> {
  public static Name = OffroadDescriptor.name;
  public static Properties = Properties;
}
