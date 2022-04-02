import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 22,
  name: 'engine_load',
  value: Percentage,
})
export class EngineLoad extends Property<typeof Percentage> {}
