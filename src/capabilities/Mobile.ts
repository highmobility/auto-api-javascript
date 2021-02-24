import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Mobile extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 102,
  };
  static readonly Name = 'mobile';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Mobile.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
