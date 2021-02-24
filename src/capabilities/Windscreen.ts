import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Windscreen extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 66,
  };
  static readonly Name = 'windscreen';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Windscreen.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
