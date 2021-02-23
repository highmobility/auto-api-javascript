import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Charging extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 35,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('charging'),
      Configuration.getUniversalProperties(),
    );
  }
}
