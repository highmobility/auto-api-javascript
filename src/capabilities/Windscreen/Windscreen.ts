import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { WindscreenDamage } from './properties/WindscreenDamage';
import { WindscreenDamageConfidence } from './properties/WindscreenDamageConfidence';
import { WindscreenDamageDetectionTime } from './properties/WindscreenDamageDetectionTime';
import { WindscreenDamageZone } from './properties/WindscreenDamageZone';
import { WindscreenNeedsReplacement } from './properties/WindscreenNeedsReplacement';
import { WindscreenZoneMatrix } from './properties/WindscreenZoneMatrix';
import { WipersIntensity } from './properties/WipersIntensity';
import { WipersStatus } from './properties/WipersStatus';

enum Properties {
  WindscreenDamage = 'windscreen_damage',
  WindscreenDamageConfidence = 'windscreen_damage_confidence',
  WindscreenDamageDetectionTime = 'windscreen_damage_detection_time',
  WindscreenDamageZone = 'windscreen_damage_zone',
  WindscreenNeedsReplacement = 'windscreen_needs_replacement',
  WindscreenZoneMatrix = 'windscreen_zone_matrix',
  WipersIntensity = 'wipers_intensity',
  WipersStatus = 'wipers_status',
}

const WindscreenDescriptor = {
  category: 'chassis',
  identifier: [0, 66],
  name: 'windscreen',
  prettyName: 'Windscreen',
  properties: {
    windscreen_damage: WindscreenDamage,
    windscreen_damage_confidence: WindscreenDamageConfidence,
    windscreen_damage_detection_time: WindscreenDamageDetectionTime,
    windscreen_damage_zone: WindscreenDamageZone,
    windscreen_needs_replacement: WindscreenNeedsReplacement,
    windscreen_zone_matrix: WindscreenZoneMatrix,
    wipers_intensity: WipersIntensity,
    wipers_status: WipersStatus,
  },
  state: [
    WindscreenDamage,
    WindscreenDamageConfidence,
    WindscreenDamageDetectionTime,
    WindscreenDamageZone,
    WindscreenNeedsReplacement,
    WindscreenZoneMatrix,
    WipersIntensity,
    WipersStatus,
  ],
};

@Descriptor(WindscreenDescriptor)
export class Windscreen extends Capability<typeof WindscreenDescriptor.properties> {
  public static Name = WindscreenDescriptor.name;
  public static Properties = Properties;
}
