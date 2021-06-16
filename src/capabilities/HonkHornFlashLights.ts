import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  EmergencyFlashersState = 'emergency_flashers_state',
  FlashTimes = 'flash_times',
  Flashers = 'flashers',
  HonkSeconds = 'honk_seconds',
  HonkTime = 'honk_time',
}

export class HonkHornFlashLights extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 38,
  };
  static readonly Name = 'honk_horn_flash_lights';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(HonkHornFlashLights.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
