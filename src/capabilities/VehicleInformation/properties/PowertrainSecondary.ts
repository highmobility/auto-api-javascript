import { Descriptor } from '../../../decorators';
import { EngineType } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 23,
  name: 'powertrain_secondary',
  value: EngineType,
})
export class PowertrainSecondary extends Property<typeof EngineType> {}
