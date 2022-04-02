import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const TypeEnumDescriptor = {
  values: {
    eco: 2,
    multi: 1,
    single: 0,
  },
  size: 1,
};

@Descriptor(TypeEnumDescriptor)
export class TypeEnum extends Enum<keyof typeof TypeEnumDescriptor.values> {}

@Descriptor({
  id: 1,
  name: 'type',
  value: TypeEnum,
})
export class Type extends Property<typeof TypeEnum> {}
