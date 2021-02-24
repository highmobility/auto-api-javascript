import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class ChassisSettings extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 83,
  };
  static readonly Name = 'chassis_settings';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(ChassisSettings.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
