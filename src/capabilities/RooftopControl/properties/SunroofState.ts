import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const SunroofStateEnumDescriptor = {
  values: {
    closed: 0,
    intermediate: 2,
    open: 1,
  },
  size: 1,
};

@Descriptor(SunroofStateEnumDescriptor)
export class SunroofStateEnum extends Enum<keyof typeof SunroofStateEnumDescriptor.values> {
  public close() {
    this.setValue('closed');
    return this;
  }
}

@Descriptor({
  id: 5,
  name: 'sunroof_state',
  value: SunroofStateEnum,
})
export class SunroofState extends Property<typeof SunroofStateEnum> {}
