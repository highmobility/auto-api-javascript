import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Engine extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 105,
  };
  static readonly Name = 'engine';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Engine.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
