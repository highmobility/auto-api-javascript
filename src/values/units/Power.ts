import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const PowerDescriptor = {
  size: 10,
  units: {
    watts: 0,
    milliwatts: 1,
    kilowatts: 2,
    megawatts: 3,
    horsepower: 10,
  },
};

@Descriptor(PowerDescriptor)
export class Power extends UnitType<keyof typeof PowerDescriptor.units> {}
