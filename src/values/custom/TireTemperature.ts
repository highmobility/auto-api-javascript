import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Temperature } from '../units';

import { LocationWheel } from './';

const TireTemperatureDescriptor = {
  items: {
    location: LocationWheel,
    temperature: Temperature,
  },
  order: ['location', 'temperature'],
  size: 11,
};

@Descriptor(TireTemperatureDescriptor)
export class TireTemperature extends CustomType<typeof TireTemperatureDescriptor.items> {}
