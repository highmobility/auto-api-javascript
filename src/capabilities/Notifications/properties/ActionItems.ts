import { ActionItem } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  multiple: true,
  name: 'action_items',
  value: ActionItem,
})
export class ActionItems extends Property<typeof ActionItem> {}
