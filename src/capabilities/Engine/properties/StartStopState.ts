import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'start_stop_state',
  value: ActiveState,
})
export class StartStopState extends Property<typeof ActiveState> {}
