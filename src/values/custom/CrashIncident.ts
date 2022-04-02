import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const CrashIncidentLocationDescriptor = {
  values: {
    front: 0,
    lateral: 1,
    rear: 2,
  },
  size: 1,
};

@Descriptor(CrashIncidentLocationDescriptor)
export class CrashIncidentLocation extends Enum<
  keyof typeof CrashIncidentLocationDescriptor.values
> {}

const CrashIncidentRepairsDescriptor = {
  values: {
    needed: 1,
    not_needed: 2,
    unknown: 0,
  },
  size: 1,
};

@Descriptor(CrashIncidentRepairsDescriptor)
export class CrashIncidentRepairs extends Enum<
  keyof typeof CrashIncidentRepairsDescriptor.values
> {}

const CrashIncidentSeverityDescriptor = {
  values: {
    high: 1,
    low: 3,
    medium: 2,
    very_high: 0,
  },
  size: 1,
};

@Descriptor(CrashIncidentSeverityDescriptor)
export class CrashIncidentSeverity extends Enum<
  keyof typeof CrashIncidentSeverityDescriptor.values
> {}

const CrashIncidentDescriptor = {
  items: {
    location: CrashIncidentLocation,
    repairs: CrashIncidentRepairs,
    severity: CrashIncidentSeverity,
  },
  order: ['location', 'severity', 'repairs'],
  size: 3,
};

@Descriptor(CrashIncidentDescriptor)
export class CrashIncident extends CustomType<typeof CrashIncidentDescriptor.items> {}
