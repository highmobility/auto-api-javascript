import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class CruiseControl extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 98,
  };
  static readonly Name = 'cruise_control';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(CruiseControl.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
