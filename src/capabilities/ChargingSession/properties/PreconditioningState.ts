import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 11,
  name: 'preconditioning_state',
  value: ActiveState,
})
export class PreconditioningState extends Property<typeof ActiveState> {}
