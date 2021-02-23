import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class HeartRate extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 41,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('heart_rate'),
      Configuration.getUniversalProperties(),
    );
  }
}
