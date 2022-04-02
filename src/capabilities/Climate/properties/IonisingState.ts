import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 8,
  name: 'ionising_state',
  value: ActiveState,
})
export class IonisingState extends Property<typeof ActiveState> {}
