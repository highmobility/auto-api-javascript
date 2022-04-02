import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const StatusEnumDescriptor = {
  values: {
    sleep: 1,
    wake_up: 0,
  },
  size: 1,
};

@Descriptor(StatusEnumDescriptor)
export class StatusEnum extends Enum<keyof typeof StatusEnumDescriptor.values> {}

@Descriptor({
  id: 1,
  name: 'status',
  value: StatusEnum,
})
export class Status extends Property<typeof StatusEnum> {}
