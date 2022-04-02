import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const IlluminanceDescriptor = {
  size: 10,
  units: {
    lux: 0,
  },
};

@Descriptor(IlluminanceDescriptor)
export class Illuminance extends UnitType<keyof typeof IlluminanceDescriptor.units> {}
