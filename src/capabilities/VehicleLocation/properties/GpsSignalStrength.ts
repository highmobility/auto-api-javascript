import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 9,
  name: 'gps_signal_strength',
  value: Percentage,
})
export class GpsSignalStrength extends Property<typeof Percentage> {}
