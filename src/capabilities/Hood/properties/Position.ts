import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const PositionEnumDescriptor = {
  values: {
    closed: 0,
    intermediate: 2,
    open: 1,
  },
  size: 1,
};

@Descriptor(PositionEnumDescriptor)
export class PositionEnum extends Enum<keyof typeof PositionEnumDescriptor.values> {}

@Descriptor({
  id: 1,
  name: 'position',
  value: PositionEnum,
})
export class Position extends Property<typeof PositionEnum> {}
