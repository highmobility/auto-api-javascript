import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { EmergencyFlashersState } from './properties/EmergencyFlashersState';
import { Flashers } from './properties/Flashers';
import { FlashTimes } from './properties/FlashTimes';
import { HonkTime } from './properties/HonkTime';

enum Properties {
  EmergencyFlashersState = 'emergency_flashers_state',
  FlashTimes = 'flash_times',
  Flashers = 'flashers',
  HonkTime = 'honk_time',
}

const HonkHornFlashLightsDescriptor = {
  category: 'chassis',
  identifier: [0, 38],
  name: 'honk_horn_flash_lights',
  prettyName: 'Honk Horn & Flash Lights',
  properties: {
    emergency_flashers_state: EmergencyFlashersState,
    flash_times: FlashTimes,
    flashers: Flashers,
    honk_time: HonkTime,
  },
  state: [Flashers],
};

@Descriptor(HonkHornFlashLightsDescriptor)
export class HonkHornFlashLights extends Capability<
  typeof HonkHornFlashLightsDescriptor.properties
> {
  public static Name = HonkHornFlashLightsDescriptor.name;
  public static Properties = Properties;
}
