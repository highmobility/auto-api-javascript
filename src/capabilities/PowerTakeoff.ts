import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class PowerTakeoff extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 101,
  };
  static readonly Name = 'power_takeoff';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(PowerTakeoff.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
