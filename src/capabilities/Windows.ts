import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Windows extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 69,
  };
  static readonly Name = 'windows';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Windows.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
