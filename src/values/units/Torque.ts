import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const TorqueDescriptor = {
  size: 10,
  units: {
    newton_meters: 0,
    newton_millimeters: 1,
    pound_feet: 2,
  },
};

@Descriptor(TorqueDescriptor)
export class Torque extends UnitType<keyof typeof TorqueDescriptor.units> {}
