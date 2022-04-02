import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Webhook } from '../../../values/custom';

@Descriptor({
  id: 2,
  multiple: true,
  name: 'webhooks',
  value: Webhook,
})
export class Webhooks extends Property<typeof Webhook> {}
