import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const EventEnumDescriptor = {
  values: {
    harsh_acceleration: 1,
    harsh_braking: 0,
    idling_engine_on: 5,
    over_rpm: 3,
    overspeed: 4,
    sharp_turn: 2,
  },
  size: 1,
};

@Descriptor(EventEnumDescriptor)
export class EventEnum extends Enum<keyof typeof EventEnumDescriptor.values> {}

@Descriptor({
  id: 16,
  name: 'event',
  value: EventEnum,
})
export class Event extends Property<typeof EventEnum> {}
