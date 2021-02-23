import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class NaviDestination extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 49,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('navi_destination'),
      Configuration.getUniversalProperties(),
    );
  }
}
