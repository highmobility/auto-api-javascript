import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class NaviDestination extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 49,
  };
  static readonly Name = 'navi_destination';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(NaviDestination.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
