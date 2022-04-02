import { Descriptor } from '../../../decorators';
import { Detected } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 4,
  name: 'vehicle_motion',
  value: Detected,
})
export class VehicleMotion extends Property<typeof Detected> {}
