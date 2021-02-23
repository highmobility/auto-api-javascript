import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class TheftAlarm extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 70,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('theft_alarm'),
      Configuration.getUniversalProperties(),
    );
  }
}
