import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class HeartRate extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 41,
  };
  static readonly Name = 'heart_rate';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(HeartRate.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
