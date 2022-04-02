import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Volume } from '../../../values/units';

@Descriptor({
  id: 20,
  name: 'total_idle_fuel_consumption',
  value: Volume,
})
export class TotalIdleFuelConsumption extends Property<typeof Volume> {}
