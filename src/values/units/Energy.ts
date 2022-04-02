import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const EnergyDescriptor = {
  size: 10,
  units: {
    joules: 0,
    kilojoules: 1,
    watt_hours: 3,
    kilowatt_hours: 4,
  },
};

@Descriptor(EnergyDescriptor)
export class Energy extends UnitType<keyof typeof EnergyDescriptor.units> {}
