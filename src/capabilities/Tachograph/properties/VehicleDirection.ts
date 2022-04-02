import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const VehicleDirectionEnumDescriptor = {
  values: {
    forward: 0,
    reverse: 1,
  },
  size: 1,
};

@Descriptor(VehicleDirectionEnumDescriptor)
export class VehicleDirectionEnum extends Enum<
  keyof typeof VehicleDirectionEnumDescriptor.values
> {}

@Descriptor({
  id: 6,
  name: 'vehicle_direction',
  value: VehicleDirectionEnum,
})
export class VehicleDirection extends Property<typeof VehicleDirectionEnum> {}
