import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'rear_exterior_light',
  value: ActiveState,
})
export class RearExteriorLight extends Property<typeof ActiveState> {}
