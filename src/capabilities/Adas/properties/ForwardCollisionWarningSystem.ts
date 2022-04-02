import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 3,
  name: 'forward_collision_warning_system',
  value: ActiveState,
})
export class ForwardCollisionWarningSystem extends Property<typeof ActiveState> {}
