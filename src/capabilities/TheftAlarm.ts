import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  EventType = 'event_type',
  InteriorProtectionStatus = 'interior_protection_status',
  InteriorProtectionTriggered = 'interior_protection_triggered',
  LastEvent = 'last_event',
  LastEventLevel = 'last_event_level',
  LastWarningReason = 'last_warning_reason',
  Status = 'status',
  TowProtectionStatus = 'tow_protection_status',
  TowProtectionTriggered = 'tow_protection_triggered',
}

export class TheftAlarm extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 70,
  };
  static readonly Name = 'theft_alarm';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(TheftAlarm.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
