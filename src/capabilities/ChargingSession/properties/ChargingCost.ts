import { ChargingCost as ChargingCostCustomType } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 13,
  name: 'charging_cost',
  value: ChargingCostCustomType,
})
export class ChargingCost extends Property<typeof ChargingCostCustomType> {}
