import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const EventTypeEnumDescriptor = {
  values: {
    front_left: 1,
    front_middle: 2,
    front_right: 3,
    idle: 0,
    left: 8,
    rear_left: 7,
    rear_middle: 6,
    rear_right: 5,
    right: 4,
    unknown: 9,
  },
  size: 1,
};

@Descriptor(EventTypeEnumDescriptor)
export class EventTypeEnum extends Enum<keyof typeof EventTypeEnumDescriptor.values> {}

@Descriptor({
  id: 7,
  name: 'event_type',
  value: EventTypeEnum,
})
export class EventType extends Property<typeof EventTypeEnum> {}
