import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 5,
  name: 'hvac_state',
  value: ActiveState,
})
export class HvacState extends Property<typeof ActiveState> {}
