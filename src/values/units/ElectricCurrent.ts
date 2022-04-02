import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const ElectricCurrentDescriptor = {
  size: 10,
  units: {
    amperes: 0,
    milliamperes: 1,
    kiloamperes: 2,
  },
};

@Descriptor(ElectricCurrentDescriptor)
export class ElectricCurrent extends UnitType<keyof typeof ElectricCurrentDescriptor.units> {}
