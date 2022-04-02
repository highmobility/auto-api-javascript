import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const EnergyEfficiencyDescriptor = {
  size: 10,
  units: {
    kwh_per_100_kilometers: 0,
    miles_per_kwh: 1,
  },
};

@Descriptor(EnergyEfficiencyDescriptor)
export class EnergyEfficiency extends UnitType<keyof typeof EnergyEfficiencyDescriptor.units> {}
