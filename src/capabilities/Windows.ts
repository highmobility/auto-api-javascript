import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  OpenPercentages = 'open_percentages',
  Positions = 'positions',
}

export class Windows extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 69,
  };
  static readonly Name = 'windows';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Windows.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
