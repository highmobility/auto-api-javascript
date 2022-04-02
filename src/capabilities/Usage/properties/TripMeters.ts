import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { TripMeter } from '../../../values/custom';

@Descriptor({
  id: 40,
  multiple: true,
  name: 'trip_meters',
  value: TripMeter,
})
export class TripMeters extends Property<typeof TripMeter> {}
