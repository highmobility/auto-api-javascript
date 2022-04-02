import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const PluggedInEnumDescriptor = {
  values: {
    disconnected: 0,
    plugged_in: 1,
  },
  size: 1,
};

@Descriptor(PluggedInEnumDescriptor)
export class PluggedInEnum extends Enum<keyof typeof PluggedInEnumDescriptor.values> {}

@Descriptor({
  id: 22,
  name: 'plugged_in',
  value: PluggedInEnum,
})
export class PluggedIn extends Property<typeof PluggedInEnum> {}
