import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'alertness_system_status',
  value: ActiveState,
})
export class AlertnessSystemStatus extends Property<typeof ActiveState> {}
