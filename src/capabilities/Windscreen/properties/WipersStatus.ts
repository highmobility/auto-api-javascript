import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const WipersStatusEnumDescriptor = {
  values: {
    active: 1,
    automatic: 2,
    inactive: 0,
  },
  size: 1,
};

@Descriptor(WipersStatusEnumDescriptor)
export class WipersStatusEnum extends Enum<keyof typeof WipersStatusEnumDescriptor.values> {
  public activate() {
    this.setValue('active');
    return this;
  }
  public deactivate() {
    this.setValue('inactive');
    return this;
  }
}

@Descriptor({
  id: 1,
  name: 'wipers_status',
  value: WipersStatusEnum,
})
export class WipersStatus extends Property<typeof WipersStatusEnum> {}
