import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class TheftAlarm extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 70,
  };
  static readonly Name = 'theft_alarm';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(TheftAlarm.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
