import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const EnabledStateDescriptor = {
  values: {
    disabled: 0,
    enabled: 1,
  },
  size: 1,
};

@Descriptor(EnabledStateDescriptor)
export class EnabledState extends Enum<keyof typeof EnabledStateDescriptor.values> {
  public disable() {
    this.setValue('disabled');
    return this;
  }
  public enable() {
    this.setValue('enabled');
    return this;
  }
}
