import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const StatusEnumDescriptor = {
  values: {
    ended: 0,
    started: 1,
  },
  size: 1,
};

@Descriptor(StatusEnumDescriptor)
export class StatusEnum extends Enum<keyof typeof StatusEnumDescriptor.values> {
  public end() {
    this.setValue('ended');
    return this;
  }
  public start() {
    this.setValue('started');
    return this;
  }
}

@Descriptor({
  id: 1,
  name: 'status',
  value: StatusEnum,
})
export class Status extends Property<typeof StatusEnum> {}
