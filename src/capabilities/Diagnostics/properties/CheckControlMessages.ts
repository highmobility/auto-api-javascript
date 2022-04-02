import { CheckControlMessage } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 25,
  multiple: true,
  name: 'check_control_messages',
  value: CheckControlMessage,
})
export class CheckControlMessages extends Property<typeof CheckControlMessage> {}
