import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 35,
  name: 'engine_oil_life_remaining',
  value: Percentage,
})
export class EngineOilLifeRemaining extends Property<typeof Percentage> {}
