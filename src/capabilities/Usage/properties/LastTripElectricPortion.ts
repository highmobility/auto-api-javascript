import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 10,
  name: 'last_trip_electric_portion',
  value: Percentage,
})
export class LastTripElectricPortion extends Property<typeof Percentage> {}
