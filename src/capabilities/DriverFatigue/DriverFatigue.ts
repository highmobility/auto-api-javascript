import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { DetectedFatigueLevel } from './properties/DetectedFatigueLevel';

enum Properties {
  DetectedFatigueLevel = 'detected_fatigue_level',
}

const DriverFatigueDescriptor = {
  category: 'health',
  identifier: [0, 65],
  name: 'driver_fatigue',
  prettyName: 'Driver Fatigue',
  properties: {
    detected_fatigue_level: DetectedFatigueLevel,
  },
  state: [DetectedFatigueLevel],
};

@Descriptor(DriverFatigueDescriptor)
export class DriverFatigue extends Capability<typeof DriverFatigueDescriptor.properties> {
  public static Name = DriverFatigueDescriptor.name;
  public static Properties = Properties;
}
