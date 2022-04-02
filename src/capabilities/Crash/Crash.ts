import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { AutomaticEcall } from './properties/AutomaticEcall';
import { ImpactZone } from './properties/ImpactZone';
import { Incidents } from './properties/Incidents';
import { Severity } from './properties/Severity';
import { TippedState } from './properties/TippedState';
import { Type } from './properties/Type';

enum Properties {
  AutomaticEcall = 'automatic_ecall',
  ImpactZone = 'impact_zone',
  Incidents = 'incidents',
  Severity = 'severity',
  TippedState = 'tipped_state',
  Type = 'type',
}

const CrashDescriptor = {
  category: 'diagnostics',
  identifier: [0, 107],
  name: 'crash',
  prettyName: 'Crash',
  properties: {
    automatic_ecall: AutomaticEcall,
    impact_zone: ImpactZone,
    incidents: Incidents,
    severity: Severity,
    tipped_state: TippedState,
    type: Type,
  },
  state: [AutomaticEcall, ImpactZone, Incidents, Severity, TippedState, Type],
};

@Descriptor(CrashDescriptor)
export class Crash extends Capability<typeof CrashDescriptor.properties> {
  public static Name = CrashDescriptor.name;
  public static Properties = Properties;
}
