import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const LastEventLevelEnumDescriptor = {
  values: {
    high: 2,
    low: 0,
    medium: 1,
  },
  size: 1,
};

@Descriptor(LastEventLevelEnumDescriptor)
export class LastEventLevelEnum extends Enum<keyof typeof LastEventLevelEnumDescriptor.values> {}

@Descriptor({
  id: 6,
  name: 'last_event_level',
  value: LastEventLevelEnum,
})
export class LastEventLevel extends Property<typeof LastEventLevelEnum> {}
