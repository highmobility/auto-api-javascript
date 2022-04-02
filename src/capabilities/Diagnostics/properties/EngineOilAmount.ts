import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Volume } from '../../../values/units';

@Descriptor({
  id: 43,
  name: 'engine_oil_amount',
  value: Volume,
})
export class EngineOilAmount extends Property<typeof Volume> {}
