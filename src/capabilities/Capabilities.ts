import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Capabilities extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 16,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('capabilities'),
      Configuration.getUniversalProperties(),
    );
  }
}
