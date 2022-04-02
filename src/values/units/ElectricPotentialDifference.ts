import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const ElectricPotentialDifferenceDescriptor = {
  size: 10,
  units: {
    volts: 0,
    millivolts: 1,
    kilovolts: 2,
  },
};

@Descriptor(ElectricPotentialDifferenceDescriptor)
export class ElectricPotentialDifference extends UnitType<
  keyof typeof ElectricPotentialDifferenceDescriptor.units
> {}
