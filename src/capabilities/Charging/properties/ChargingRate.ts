import { Descriptor } from '../../../decorators';
import { Power } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 24,
  name: 'charging_rate',
  value: Power,
})
export class ChargingRate extends Property<typeof Power> {}
