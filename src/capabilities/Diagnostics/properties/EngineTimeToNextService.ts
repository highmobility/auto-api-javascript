import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 53,
  name: 'engine_time_to_next_service',
  value: Duration,
})
export class EngineTimeToNextService extends Property<typeof Duration> {}
