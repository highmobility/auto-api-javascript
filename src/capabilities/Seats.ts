import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Seats extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 86,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('seats'),
      Configuration.getUniversalProperties(),
    );
  }
}
