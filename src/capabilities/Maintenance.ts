import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class Maintenance extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 52,
  };
  static readonly Name = 'maintenance';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Maintenance.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
