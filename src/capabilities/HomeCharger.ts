import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class HomeCharger extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 96,
  };
  static readonly Name = 'home_charger';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(HomeCharger.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
