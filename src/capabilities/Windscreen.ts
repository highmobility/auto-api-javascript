import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

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

export class Windscreen extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 66,
  };
  static readonly Name = 'windscreen';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Windscreen.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
