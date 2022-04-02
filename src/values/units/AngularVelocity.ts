import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const AngularVelocityDescriptor = {
  size: 10,
  units: {
    revolutions_per_minute: 0,
    degrees_per_second: 1,
    radians_per_second: 2,
  },
};

@Descriptor(AngularVelocityDescriptor)
export class AngularVelocity extends UnitType<keyof typeof AngularVelocityDescriptor.units> {}
