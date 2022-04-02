import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { AccTargetSpeed } from './properties/AccTargetSpeed';
import { AdaptiveCruiseControl } from './properties/AdaptiveCruiseControl';
import { CruiseControl as CruiseControlProperty } from './properties/CruiseControl';
import { Limiter } from './properties/Limiter';
import { TargetSpeed } from './properties/TargetSpeed';

enum Properties {
  AccTargetSpeed = 'acc_target_speed',
  AdaptiveCruiseControl = 'adaptive_cruise_control',
  CruiseControlProperty = 'cruise_control',
  Limiter = 'limiter',
  TargetSpeed = 'target_speed',
}

const CruiseControlDescriptor = {
  category: 'chassis',
  identifier: [0, 98],
  name: 'cruise_control',
  prettyName: 'Cruise Control',
  properties: {
    acc_target_speed: AccTargetSpeed,
    adaptive_cruise_control: AdaptiveCruiseControl,
    cruise_control: CruiseControlProperty,
    limiter: Limiter,
    target_speed: TargetSpeed,
  },
  state: [AccTargetSpeed, AdaptiveCruiseControl, CruiseControlProperty, Limiter, TargetSpeed],
};

@Descriptor(CruiseControlDescriptor)
export class CruiseControl extends Capability<typeof CruiseControlDescriptor.properties> {
  public static Name = CruiseControlDescriptor.name;
  public static Properties = Properties;
}
