import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class CruiseControl extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 98,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('cruise_control'),
      Configuration.getUniversalProperties(),
    );
  }
}
