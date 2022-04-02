import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const StatusEnumDescriptor = {
  values: {
    armed: 1,
    triggered: 2,
    unarmed: 0,
  },
  size: 1,
};

@Descriptor(StatusEnumDescriptor)
export class StatusEnum extends Enum<keyof typeof StatusEnumDescriptor.values> {
  public arm() {
    this.setValue('armed');
    return this;
  }
  public trigger() {
    this.setValue('triggered');
    return this;
  }
  public unarm() {
    this.setValue('unarmed');
    return this;
  }
}

@Descriptor({
  id: 1,
  name: 'status',
  value: StatusEnum,
})
export class Status extends Property<typeof StatusEnum> {}
