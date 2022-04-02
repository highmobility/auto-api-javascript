import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Speed } from '../../../values/units';

@Descriptor({
  id: 30,
  name: 'average_speed_last_trip',
  value: Speed,
})
export class AverageSpeedLastTrip extends Property<typeof Speed> {}
