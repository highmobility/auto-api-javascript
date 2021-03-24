import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  AutomaticEcall = 'automatic_ecall',
  ImpactZone = 'impact_zone',
  Incidents = 'incidents',
  Severity = 'severity',
  TippedState = 'tipped_state',
  Type = 'type',
}

export class Crash extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 107,
  };
  static readonly Name = 'crash';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Crash.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
