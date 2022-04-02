import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

import { Event } from './';

const WebhookAvailableDescriptor = {
  values: {
    available: 1,
    unavailable: 0,
  },
  size: 1,
};

@Descriptor(WebhookAvailableDescriptor)
export class WebhookAvailable extends Enum<keyof typeof WebhookAvailableDescriptor.values> {}

const WebhookDescriptor = {
  items: {
    available: WebhookAvailable,
    event: Event,
  },
  order: ['available', 'event'],
  size: 2,
};

@Descriptor(WebhookDescriptor)
export class Webhook extends CustomType<typeof WebhookDescriptor.items> {}
