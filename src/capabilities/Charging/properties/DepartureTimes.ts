import { DepartureTime } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 17,
  multiple: true,
  name: 'departure_times',
  value: DepartureTime,
})
export class DepartureTimes extends Property<typeof DepartureTime> {}
