import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class PowerTakeoff extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 101,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('power_takeoff'),
      Configuration.getUniversalProperties(),
    );
  }
}
