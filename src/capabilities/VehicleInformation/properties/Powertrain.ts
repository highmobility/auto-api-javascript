import { Descriptor } from '../../../decorators';
import { EngineType } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'powertrain',
  value: EngineType,
})
export class Powertrain extends Property<typeof EngineType> {}
