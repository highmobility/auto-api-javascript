import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  ActionItems = 'action_items',
  ActivatedAction = 'activated_action',
  Clear = 'clear',
  Text = 'text',
}

export class Notifications extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 56,
  };
  static readonly Name = 'notifications';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Notifications.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
