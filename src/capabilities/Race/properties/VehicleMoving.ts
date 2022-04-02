import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const VehicleMovingEnumDescriptor = {
  values: {
    moving: 1,
    not_moving: 0,
  },
  size: 1,
};

@Descriptor(VehicleMovingEnumDescriptor)
export class VehicleMovingEnum extends Enum<keyof typeof VehicleMovingEnumDescriptor.values> {}

@Descriptor({
  id: 18,
  name: 'vehicle_moving',
  value: VehicleMovingEnum,
})
export class VehicleMoving extends Property<typeof VehicleMovingEnum> {}
