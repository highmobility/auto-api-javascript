import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Torque } from '../../../values/units';

@Descriptor({
  id: 13,
  name: 'engine_max_torque',
  value: Torque,
})
export class EngineMaxTorque extends Property<typeof Torque> {}
