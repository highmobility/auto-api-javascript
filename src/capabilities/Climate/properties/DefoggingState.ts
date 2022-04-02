import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 6,
  name: 'defogging_state',
  value: ActiveState,
})
export class DefoggingState extends Property<typeof ActiveState> {}
