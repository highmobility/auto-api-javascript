import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  StartStopEnabled = 'start_stop_enabled',
  StartStopState = 'start_stop_state',
  Status = 'status',
}

export class Engine extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 105,
  };
  static readonly Name = 'engine';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Engine.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
