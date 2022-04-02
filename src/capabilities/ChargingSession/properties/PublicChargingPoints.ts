import { ChargingPoint } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  multiple: true,
  name: 'public_charging_points',
  value: ChargingPoint,
})
export class PublicChargingPoints extends Property<typeof ChargingPoint> {}
