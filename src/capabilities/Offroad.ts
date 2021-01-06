import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Offroad extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 82,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('offroad'),
      Configuration.getUniversalProperties(),
    );
  }
}
