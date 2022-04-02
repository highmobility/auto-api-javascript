import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 44,
  name: 'engine_oil_level',
  value: Percentage,
})
export class EngineOilLevel extends Property<typeof Percentage> {}
