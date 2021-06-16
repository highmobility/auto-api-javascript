import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  CapabilityId = 'capability_id',
  EndDate = 'end_date',
  StartDate = 'start_date',
  States = 'states',
}

export class Historical extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 18,
  };
  static readonly Name = 'historical';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Historical.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
