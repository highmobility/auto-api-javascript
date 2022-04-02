import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { EventType } from './properties/EventType';
import { InteriorProtectionStatus } from './properties/InteriorProtectionStatus';
import { LastEvent } from './properties/LastEvent';
import { LastEventLevel } from './properties/LastEventLevel';
import { LastWarningReason } from './properties/LastWarningReason';
import { Status } from './properties/Status';
import { TowProtectionStatus } from './properties/TowProtectionStatus';

enum Properties {
  EventType = 'event_type',
  InteriorProtectionStatus = 'interior_protection_status',
  LastEvent = 'last_event',
  LastEventLevel = 'last_event_level',
  LastWarningReason = 'last_warning_reason',
  Status = 'status',
  TowProtectionStatus = 'tow_protection_status',
}

const TheftAlarmDescriptor = {
  category: 'parking',
  identifier: [0, 70],
  name: 'theft_alarm',
  prettyName: 'Theft Alarm',
  properties: {
    event_type: EventType,
    interior_protection_status: InteriorProtectionStatus,
    last_event: LastEvent,
    last_event_level: LastEventLevel,
    last_warning_reason: LastWarningReason,
    status: Status,
    tow_protection_status: TowProtectionStatus,
  },
  state: [
    EventType,
    InteriorProtectionStatus,
    LastEvent,
    LastEventLevel,
    LastWarningReason,
    Status,
    TowProtectionStatus,
  ],
};

@Descriptor(TheftAlarmDescriptor)
export class TheftAlarm extends Capability<typeof TheftAlarmDescriptor.properties> {
  public static Name = TheftAlarmDescriptor.name;
  public static Properties = Properties;
}
