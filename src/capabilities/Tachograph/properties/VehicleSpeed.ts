import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Speed } from '../../../values/units';

@Descriptor({
  id: 7,
  name: 'vehicle_speed',
  value: Speed,
})
export class VehicleSpeed extends Property<typeof Speed> {}
