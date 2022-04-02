import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const FuelEfficiencyDescriptor = {
  size: 10,
  units: {
    liters_per_100_kilometers: 0,
    miles_per_imperial_gallon: 1,
    miles_per_gallon: 2,
  },
};

@Descriptor(FuelEfficiencyDescriptor)
export class FuelEfficiency extends UnitType<keyof typeof FuelEfficiencyDescriptor.units> {}
