import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 21,
  name: 'engine_torque',
  value: Percentage,
})
export class EngineTorque extends Property<typeof Percentage> {}
