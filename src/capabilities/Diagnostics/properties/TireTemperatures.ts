import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { TireTemperature } from '../../../values/custom';

@Descriptor({
  id: 27,
  multiple: true,
  name: 'tire_temperatures',
  value: TireTemperature,
})
export class TireTemperatures extends Property<typeof TireTemperature> {}
