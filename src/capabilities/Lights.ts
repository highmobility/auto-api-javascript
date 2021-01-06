import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Lights extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 54,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('lights'),
      Configuration.getUniversalProperties(),
    );
  }
}
