import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { Double } from '../base/Double';
import { String } from '../base/String';

@Size(8)
export class ChargingCostCalculatedChargingCost extends Double {}

@Size(8)
export class ChargingCostCalculatedSavings extends Double {}

export class ChargingCostCurrency extends String {}

@Size(8)
export class ChargingCostSimulatedImmediateChargingCost extends Double {}

const ChargingCostDescriptor = {
  items: {
    calculated_charging_cost: ChargingCostCalculatedChargingCost,
    calculated_savings: ChargingCostCalculatedSavings,
    currency: ChargingCostCurrency,
    simulated_immediate_charging_cost: ChargingCostSimulatedImmediateChargingCost,
  },
  order: [
    'currency',
    'calculated_charging_cost',
    'calculated_savings',
    'simulated_immediate_charging_cost',
  ],
};

@Descriptor(ChargingCostDescriptor)
export class ChargingCost extends CustomType<typeof ChargingCostDescriptor.items> {}
