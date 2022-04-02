import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 7,
  name: 'defrosting_state',
  value: ActiveState,
})
export class DefrostingState extends Property<typeof ActiveState> {}
