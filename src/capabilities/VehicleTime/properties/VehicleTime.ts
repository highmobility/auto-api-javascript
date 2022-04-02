import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Time } from '../../../values/custom';

@Descriptor({
  id: 1,
  name: 'vehicle_time',
  value: Time,
})
export class VehicleTime extends Property<typeof Time> {}
