import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const TypeEnumDescriptor = {
  values: {
    non_pedestrian: 1,
    pedestrian: 0,
  },
  size: 1,
};

@Descriptor(TypeEnumDescriptor)
export class TypeEnum extends Enum<keyof typeof TypeEnumDescriptor.values> {}

@Descriptor({
  id: 2,
  name: 'type',
  value: TypeEnum,
})
export class Type extends Property<typeof TypeEnum> {}
