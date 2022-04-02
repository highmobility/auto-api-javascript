import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const VehicleOverspeedEnumDescriptor = {
  values: {
    no_overspeed: 0,
    overspeed: 1,
  },
  size: 1,
};

@Descriptor(VehicleOverspeedEnumDescriptor)
export class VehicleOverspeedEnum extends Enum<
  keyof typeof VehicleOverspeedEnumDescriptor.values
> {}

@Descriptor({
  id: 5,
  name: 'vehicle_overspeed',
  value: VehicleOverspeedEnum,
})
export class VehicleOverspeed extends Property<typeof VehicleOverspeedEnum> {}
