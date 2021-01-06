import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class HomeCharger extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 96,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('home_charger'),
      Configuration.getUniversalProperties(),
    );
  }
}
