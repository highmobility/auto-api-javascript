import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Volume } from '../../../values/units';

@Descriptor({
  id: 15,
  name: 'fuel_volume',
  value: Volume,
})
export class FuelVolume extends Property<typeof Volume> {}
