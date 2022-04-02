import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Energy } from '../units';

import { DrivingMode } from './';

const DrivingModeEnergyConsumptionDescriptor = {
  items: {
    consumption: Energy,
    driving_mode: DrivingMode,
  },
  order: ['driving_mode', 'consumption'],
  size: 11,
};

@Descriptor(DrivingModeEnergyConsumptionDescriptor)
export class DrivingModeEnergyConsumption extends CustomType<
  typeof DrivingModeEnergyConsumptionDescriptor.items
> {}
