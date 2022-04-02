import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const AngleDescriptor = {
  size: 10,
  units: {
    degrees: 0,
    radians: 3,
    revolutions: 5,
  },
};

@Descriptor(AngleDescriptor)
export class Angle extends UnitType<keyof typeof AngleDescriptor.units> {}
