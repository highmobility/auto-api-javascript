import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class HonkHornFlashLights extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 38,
  };
  static readonly Name = 'honk_horn_flash_lights';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(HonkHornFlashLights.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
