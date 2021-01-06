import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class HonkHornFlashLights extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 38,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('honk_horn_flash_lights'),
      Configuration.getUniversalProperties(),
    );
  }
}
