import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  AccTargetSpeed = 'acc_target_speed',
  AdaptiveCruiseControl = 'adaptive_cruise_control',
  CruiseControl = 'cruise_control',
  Limiter = 'limiter',
  TargetSpeed = 'target_speed',
}

export class CruiseControl extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 98,
  };
  static readonly Name = 'cruise_control';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(CruiseControl.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
