import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  HeartRate = 'heart_rate',
}

export class HeartRate extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 41,
  };
  static readonly Name = 'heart_rate';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(HeartRate.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
