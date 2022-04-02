import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Speed } from '../../../values/units';

@Descriptor({
  id: 31,
  name: 'average_speed_since_reset',
  value: Speed,
})
export class AverageSpeedSinceReset extends Property<typeof Speed> {}
