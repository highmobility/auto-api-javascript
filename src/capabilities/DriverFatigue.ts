import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class DriverFatigue extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 65,
  };
  static readonly Name = 'driver_fatigue';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(DriverFatigue.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
