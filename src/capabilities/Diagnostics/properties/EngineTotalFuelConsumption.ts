import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Volume } from '../../../values/units';

@Descriptor({
  id: 19,
  name: 'engine_total_fuel_consumption',
  value: Volume,
})
export class EngineTotalFuelConsumption extends Property<typeof Volume> {}
