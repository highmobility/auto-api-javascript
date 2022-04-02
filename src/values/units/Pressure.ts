import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const PressureDescriptor = {
  size: 10,
  units: {
    pascals: 0,
    kilopascals: 3,
    inches_of_mercury: 5,
    bars: 6,
    millibars: 7,
    millimeters_of_mercury: 8,
    pounds_force_per_square_inch: 9,
  },
};

@Descriptor(PressureDescriptor)
export class Pressure extends UnitType<keyof typeof PressureDescriptor.units> {}
