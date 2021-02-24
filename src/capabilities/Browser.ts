import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Browser extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 73,
  };
  static readonly Name = 'browser';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Browser.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
