import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class ChargingSession extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 109,
  };
  static readonly Name = 'charging_session';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(ChargingSession.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
