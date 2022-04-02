import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const LengthDescriptor = {
  size: 10,
  units: {
    meters: 0,
    millimeters: 1,
    centimeters: 2,
    decimeters: 3,
    kilometers: 4,
    megameters: 5,
    inches: 11,
    feet: 12,
    yards: 13,
    miles: 14,
    scandinavian_miles: 15,
    nautical_miles: 17,
  },
};

@Descriptor(LengthDescriptor)
export class Length extends UnitType<keyof typeof LengthDescriptor.units> {}
