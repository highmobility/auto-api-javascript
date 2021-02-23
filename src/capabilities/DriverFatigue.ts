import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class DriverFatigue extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 65,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('driver_fatigue'),
      Configuration.getUniversalProperties(),
    );
  }
}
