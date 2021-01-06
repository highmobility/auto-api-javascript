import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Diagnostics extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 51,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('diagnostics'),
      Configuration.getUniversalProperties(),
    );
  }
}
