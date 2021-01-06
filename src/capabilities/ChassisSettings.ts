import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class ChassisSettings extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 83,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('chassis_settings'),
      Configuration.getUniversalProperties(),
    );
  }
}
