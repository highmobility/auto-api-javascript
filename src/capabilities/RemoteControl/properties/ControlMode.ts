import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const ControlModeEnumDescriptor = {
  values: {
    aborted: 4,
    available: 1,
    ended: 5,
    failed_to_start: 3,
    started: 2,
    unavailable: 0,
  },
  size: 1,
};

@Descriptor(ControlModeEnumDescriptor)
export class ControlModeEnum extends Enum<keyof typeof ControlModeEnumDescriptor.values> {
  public abort() {
    this.setValue('aborted');
    return this;
  }
  public start() {
    this.setValue('started');
    return this;
  }
  public stop() {
    this.setValue('ended');
    return this;
  }
}

@Descriptor({
  id: 1,
  name: 'control_mode',
  value: ControlModeEnum,
})
export class ControlMode extends Property<typeof ControlModeEnum> {}
