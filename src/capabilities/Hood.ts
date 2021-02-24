import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Hood extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 103,
  };
  static readonly Name = 'hood';
  constructor() {
    super(Configuration.getCapabilityDefinition(Hood.Name), Configuration.getUniversalProperties());
  }
}
