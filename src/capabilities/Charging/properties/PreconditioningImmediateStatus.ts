import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 33,
  name: 'preconditioning_immediate_status',
  value: ActiveState,
})
export class PreconditioningImmediateStatus extends Property<typeof ActiveState> {}
