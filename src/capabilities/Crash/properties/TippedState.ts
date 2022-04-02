import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const TippedStateEnumDescriptor = {
  values: {
    not_tipped: 1,
    tipped_over: 0,
  },
  size: 1,
};

@Descriptor(TippedStateEnumDescriptor)
export class TippedStateEnum extends Enum<keyof typeof TippedStateEnumDescriptor.values> {}

@Descriptor({
  id: 3,
  name: 'tipped_state',
  value: TippedStateEnum,
})
export class TippedState extends Property<typeof TippedStateEnum> {}
