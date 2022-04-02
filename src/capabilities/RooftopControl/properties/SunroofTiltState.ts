import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const SunroofTiltStateEnumDescriptor = {
  values: {
    closed: 0,
    half_tilted: 2,
    tilted: 1,
  },
  size: 1,
};

@Descriptor(SunroofTiltStateEnumDescriptor)
export class SunroofTiltStateEnum extends Enum<keyof typeof SunroofTiltStateEnumDescriptor.values> {
  public close() {
    this.setValue('closed');
    return this;
  }
}

@Descriptor({
  id: 4,
  name: 'sunroof_tilt_state',
  value: SunroofTiltStateEnum,
})
export class SunroofTiltState extends Property<typeof SunroofTiltStateEnum> {}
