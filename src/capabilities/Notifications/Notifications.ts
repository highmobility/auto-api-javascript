import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { ActionItems } from './properties/ActionItems';
import { ActivatedAction } from './properties/ActivatedAction';
import { Clear } from './properties/Clear';
import { Text } from './properties/Text';

enum Properties {
  ActionItems = 'action_items',
  ActivatedAction = 'activated_action',
  Clear = 'clear',
  Text = 'text',
}

const NotificationsDescriptor = {
  category: 'headunit',
  identifier: [0, 56],
  name: 'notifications',
  prettyName: 'Notifications',
  properties: {
    action_items: ActionItems,
    activated_action: ActivatedAction,
    clear: Clear,
    text: Text,
  },
  state: [ActionItems, ActivatedAction, Clear, Text],
};

@Descriptor(NotificationsDescriptor)
export class Notifications extends Capability<typeof NotificationsDescriptor.properties> {
  public static Name = NotificationsDescriptor.name;
  public static Properties = Properties;
}
