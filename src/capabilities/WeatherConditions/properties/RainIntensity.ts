import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  name: 'rain_intensity',
  value: Percentage,
})
export class RainIntensity extends Property<typeof Percentage> {}
