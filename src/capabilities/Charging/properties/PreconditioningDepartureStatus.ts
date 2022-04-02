import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 32,
  name: 'preconditioning_departure_status',
  value: ActiveState,
})
export class PreconditioningDepartureStatus extends Property<typeof ActiveState> {}
