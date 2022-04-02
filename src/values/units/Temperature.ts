import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const TemperatureDescriptor = {
  size: 10,
  units: {
    kelvin: 0,
    celsius: 1,
    fahrenheit: 2,
  },
};

@Descriptor(TemperatureDescriptor)
export class Temperature extends UnitType<keyof typeof TemperatureDescriptor.units> {}
