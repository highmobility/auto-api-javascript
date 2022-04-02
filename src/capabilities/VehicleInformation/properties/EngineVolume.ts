import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Volume } from '../../../values/units';

@Descriptor({
  id: 12,
  name: 'engine_volume',
  value: Volume,
})
export class EngineVolume extends Property<typeof Volume> {}
