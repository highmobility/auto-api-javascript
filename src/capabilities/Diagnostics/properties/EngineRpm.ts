import { AngularVelocity } from '../../../values/units';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 4,
  name: 'engine_rpm',
  value: AngularVelocity,
})
export class EngineRpm extends Property<typeof AngularVelocity> {}
