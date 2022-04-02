import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 6,
  name: 'rear_cross_warning_system',
  value: ActiveState,
})
export class RearCrossWarningSystem extends Property<typeof ActiveState> {}
