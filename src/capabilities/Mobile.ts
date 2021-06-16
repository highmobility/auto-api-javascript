import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Connection = 'connection',
}

export class Mobile extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 102,
  };
  static readonly Name = 'mobile';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Mobile.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
