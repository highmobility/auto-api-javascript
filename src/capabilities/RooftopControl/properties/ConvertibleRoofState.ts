import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const ConvertibleRoofStateEnumDescriptor = {
  values: {
    closed: 0,
    closed_secured: 3,
    emergency_locked: 2,
    hard_top_mounted: 5,
    intermediate_position: 6,
    loading_position: 7,
    loading_position_immediate: 8,
    open: 1,
    open_secured: 4,
  },
  size: 1,
};

@Descriptor(ConvertibleRoofStateEnumDescriptor)
export class ConvertibleRoofStateEnum extends Enum<
  keyof typeof ConvertibleRoofStateEnumDescriptor.values
> {
  public close() {
    this.setValue('closed');
    return this;
  }
}

@Descriptor({
  id: 3,
  name: 'convertible_roof_state',
  value: ConvertibleRoofStateEnum,
})
export class ConvertibleRoofState extends Property<typeof ConvertibleRoofStateEnum> {}
